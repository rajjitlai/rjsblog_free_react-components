import { useQuery } from '@tanstack/react-query';
import { getComponents, getComponentById, getComponentsByCategory, searchComponents, transformToComponentItem } from '@/lib/componentsService';
import type { ComponentDocument } from '@/lib/componentsService';
import type { Models } from 'appwrite';

export const useComponents = () => {
    return useQuery({
        queryKey: ['components'],
        queryFn: async () => {
            const response = await getComponents();
            return response.documents.map((doc) => transformToComponentItem(doc as unknown as ComponentDocument));
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

export const useComponent = (id: string | undefined) => {
    return useQuery({
        queryKey: ['component', id],
        queryFn: async () => {
            if (!id) throw new Error('Component ID is required');

            // Try to find by preview field first, then by $id
            try {
                const allComponents = await getComponents();
                const component = allComponents.documents.find(
                    (doc: Models.Document) => {
                        const typedDoc = doc as unknown as ComponentDocument;
                        return typedDoc.preview === id || typedDoc.$id === id;
                    }
                );

                if (component) {
                    return transformToComponentItem(component as unknown as ComponentDocument);
                }

                // Fallback: try direct ID lookup
                const doc = await getComponentById(id);
                return transformToComponentItem(doc as unknown as ComponentDocument);
            } catch (error) {
                // If direct lookup fails, try searching by preview
                const allComponents = await getComponents();
                const component = allComponents.documents.find(
                    (doc: Models.Document) => {
                        const typedDoc = doc as unknown as ComponentDocument;
                        return typedDoc.preview === id;
                    }
                );

                if (component) {
                    return transformToComponentItem(component as unknown as ComponentDocument);
                }

                throw error;
            }
        },
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
};

export const useComponentsByCategory = (category: string) => {
    return useQuery({
        queryKey: ['components', 'category', category],
        queryFn: async () => {
            const response = await getComponentsByCategory(category);
            return response.documents.map((doc) => transformToComponentItem(doc as unknown as ComponentDocument));
        },
        enabled: category !== 'all',
        staleTime: 5 * 60 * 1000,
    });
};

export const useSearchComponents = (searchTerm: string) => {
    return useQuery({
        queryKey: ['components', 'search', searchTerm],
        queryFn: async () => {
            if (!searchTerm.trim()) return [];
            const response = await searchComponents(searchTerm);
            return response.documents.map((doc) => transformToComponentItem(doc as unknown as ComponentDocument));
        },
        enabled: searchTerm.trim().length > 0,
        staleTime: 2 * 60 * 1000,
    });
};

