// Test Scripts for Tributes API
// Replace YOUR_DOMAIN with your actual Vercel domain or localhost:3000

import type { Tribute } from "./types";

const BASE_URL = 'http://localhost:3000'; // or 'https://your-app.vercel.app'

// ===== 1. GET ALL TRIBUTES =====
export async function getAllTributes() {
  console.log('🔍 Testing GET all tributes...');
  try {
    const response = await fetch(`${BASE_URL}/api/tributes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Success! Tributes:', data);
    console.log(`Found ${data.length} tributes\n`);
    return data;
  } catch (error) {
    console.error('❌ Error:', error);
  }
}



// ===== 3. GET SINGLE TRIBUTE BY ID =====
export async function getTributeById(id:string) {
  console.log(`🔍 Testing GET tribute by ID: ${id}...`);
  try {
    const response = await fetch(`${BASE_URL}/api/tributes/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Success! Tribute:', data);
    console.log(`Found: ${data.name}\n`);
    return data;
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// ===== 4. DELETE TRIBUTE BY ID =====
export async function deleteTribute(id:string) {
  console.log(`🗑️  Testing DELETE tribute ID: ${id}...`);
  try {
    const response = await fetch(`${BASE_URL}/api/tributes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Success! Deleted:', data);
    console.log(`Tribute ID ${id} deleted\n`);
    return data;
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// ===== 5. SEARCH TRIBUTES (Custom implementation needed) =====
// Note: This requires adding a search endpoint to your API
// For now, we'll filter on the client side
export async function searchTributes(searchTerm:string) {
  console.log(`🔎 Searching for: "${searchTerm}"...`);
  try {
    const tributes:Tribute[] = await getAllTributes();
    
    const results = tributes.filter(tribute => 
      tribute.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tribute.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    console.log(`✅ Found ${results.length} matching tributes:`, results);
    return results;
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// ===== RUN ALL TESTS =====
export async function runAllTests() {
  console.log('🚀 Starting API Tests...\n');
  console.log('='.repeat(50) + '\n');
  
  // Test 1: Get all tributes
  const allTributes:Tribute[] = await getAllTributes();
  
  // Test 2: Create a new tribute
  const newTribute = await createTribute(
    'Test User',
    'This is a test tribute message to verify the API is working correctly.'
  );
  
  // Test 3: Get the newly created tribute by ID
  if (newTribute && newTribute.id) {
    await getTributeById(newTribute.id);
  }
  
  // Test 4: Search for tributes
  await searchTributes('Test');
  
  // Test 5: Delete the test tribute (cleanup)
  if (newTribute && newTribute.id) {
    await deleteTribute(newTribute.id);
  }
  
  // Test 6: Verify deletion by getting all tributes again
  await getAllTributes();
  
  console.log('='.repeat(50));
  console.log('✨ All tests completed!\n');
}

// ===== USAGE EXAMPLES =====

// Run all tests at once:
// runAllTests();

// Or run individual tests:
// getAllTributes();
// createTribute('John Doe', 'A heartfelt message');
// getTributeById(1);
// deleteTribute(1);
// searchTributes('John');
