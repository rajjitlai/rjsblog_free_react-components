import { databases, appwriteConfig, ID, Query } from './appwrite';
import type { Models } from 'appwrite';

// Component document structure in Appwrite
// Note: Store code.tsx and code.css as separate string attributes in Appwrite
// Tags are stored as comma-separated string in Appwrite (e.g., "button,gradient,animated")
export interface ComponentDocument {
  $id?: string;
  $createdAt?: string;
  $updatedAt?: string;
  name: string;
  description: string;
  category: string;
  tags: string; // Stored as comma-separated string in Appwrite
  code: string; // TSX code stored as string
  css?: string; // CSS code stored as string (optional)
  preview?: string; // Component preview identifier (e.g., 'gradient-button')
  featured?: boolean;
  views?: number;
  likes?: number;
}

// Helper to convert ComponentDocument to ComponentItem format
export const transformToComponentItem = (doc: ComponentDocument) => {
  // Use preview field as ID if available, otherwise use $id
  // This allows components to have readable URLs like /component/gradient-button
  const componentId = doc.preview || doc.$id || '';

  // Convert tags from comma-separated string to array
  const tagsArray = doc.tags
    ? doc.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    : [];

  return {
    id: componentId,
    name: doc.name,
    description: doc.description,
    category: doc.category,
    tags: tagsArray,
    code: {
      tsx: doc.code,
      css: doc.css,
    },
    preview: doc.preview, // Keep preview for component rendering
  };
};

// Create a new component
// Accepts component with nested code structure and flattens it for Appwrite
export const createComponent = async (
  component: Omit<ComponentDocument, '$id' | '$createdAt' | '$updatedAt'> & {
    code?: { tsx: string; css?: string };
    tags?: string | string[]; // Accept both string and array
  }
) => {
  try {
    // Convert tags to comma-separated string if it's an array
    const tagsString = Array.isArray(component.tags)
      ? component.tags.join(',')
      : component.tags || '';

    // Flatten code structure for Appwrite storage
    const componentData = {
      name: component.name,
      description: component.description,
      category: component.category,
      tags: tagsString,
      code: component.code?.tsx || component.code || '',
      css: component.code?.css || component.css || '',
      preview: component.preview,
      featured: component.featured || false,
      views: component.views || 0,
      likes: component.likes || 0,
    };

    const response = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.componentsCollectionId,
      ID.unique(),
      componentData
    );
    return response;
  } catch (error) {
    console.error('Error creating component:', error);
    throw error;
  }
};

// Get all components
export const getComponents = async (queries?: string[]) => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.componentsCollectionId,
      queries
    );
    return response;
  } catch (error) {
    console.error('Error fetching components:', error);
    throw error;
  }
};

// Get component by ID
export const getComponentById = async (componentId: string) => {
  try {
    const response = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.componentsCollectionId,
      componentId
    );
    return response;
  } catch (error) {
    console.error('Error fetching component:', error);
    throw error;
  }
};

// Update component
export const updateComponent = async (
  componentId: string,
  component: Partial<ComponentDocument>
) => {
  try {
    const response = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.componentsCollectionId,
      componentId,
      component
    );
    return response;
  } catch (error) {
    console.error('Error updating component:', error);
    throw error;
  }
};

// Delete component
export const deleteComponent = async (componentId: string) => {
  try {
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.componentsCollectionId,
      componentId
    );
  } catch (error) {
    console.error('Error deleting component:', error);
    throw error;
  }
};

// Get components by category
export const getComponentsByCategory = async (category: string) => {
  try {
    const queries = [Query.equal('category', category)];
    return await getComponents(queries);
  } catch (error) {
    console.error('Error fetching components by category:', error);
    throw error;
  }
};

// Search components
export const searchComponents = async (searchTerm: string) => {
  try {
    const queries = [
      Query.or([
        Query.search('name', searchTerm),
        Query.search('description', searchTerm),
        Query.search('tags', searchTerm),
      ]),
    ];
    return await getComponents(queries);
  } catch (error) {
    console.error('Error searching components:', error);
    throw error;
  }
};

// Get featured components
export const getFeaturedComponents = async () => {
  try {
    const queries = [
      Query.equal('featured', true),
      Query.orderDesc('$createdAt'),
      Query.limit(10),
    ];
    return await getComponents(queries);
  } catch (error) {
    console.error('Error fetching featured components:', error);
    throw error;
  }
};

