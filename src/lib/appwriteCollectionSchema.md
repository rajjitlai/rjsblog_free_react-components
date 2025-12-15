# Appwrite Collection Schema for Components

Create a new collection in your Appwrite database with the following attributes:

## Collection Name: `components`

### Attributes:

1. **name** (String, required)
   - Size: 255
   - Required: Yes

2. **description** (String, required)
   - Size: 1000
   - Required: Yes

3. **category** (String, required)
   - Size: 50
   - Required: Yes
   - Options: buttons, cards, forms, navigation, feedback

4. **tags** (String[], required)
   - Array of strings
   - Required: Yes

5. **code** (String, required)
   - Size: 10000
   - Required: Yes
   - Store TSX code as plain string

6. **css** (String, optional)
   - Size: 5000
   - Required: No
   - Store CSS code as plain string (if available)

7. **preview** (String, optional)
   - Size: 100
   - Required: No
   - Component preview identifier (e.g., 'gradient-button')

8. **featured** (Boolean, optional)
   - Default: false
   - Required: No

9. **views** (Integer, optional)
   - Default: 0
   - Required: No

10. **likes** (Integer, optional)
    - Default: 0
    - Required: No

### Indexes:

- Create index on `category` for faster filtering
- Create index on `featured` for featured components query
- Create full-text search index on `name`, `description`, and `tags`

### Permissions:

- **Read**: Any (public read access)
- **Create**: Users (authenticated users only)
- **Update**: Users (authenticated users only)
- **Delete**: Users (authenticated users only)

