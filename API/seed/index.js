// Seeded data for dev use, skipping database requirement for now.

// For public API
const users = [
  { id: 'user-1', name: 'Winnie the Pooh' },
  { id: 'user-2', name: 'Christopher Robin' },
  { id: 'user-3', name: 'Tigger' },
  { id: 'user-4', name: 'Eeyore' },
  { id: 'user-5', name: 'Piglet' },
]

// For protected API (only accessible after authentication through Facebook OAuth)
const admins = [
  { id: 'admin-1', name: 'Brian' },
  { id: 'admin-2', name: 'Brooke' },
  { id: 'admin-3', name: 'Benjamin' },
  { id: 'admin-4', name: 'Breanna' },
  { id: 'admin-5', name: 'Bobby' },
  { id: 'admin-6', name: 'Bridget' },
]

module.exports = { users, admins }
