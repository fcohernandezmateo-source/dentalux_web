// Cliente neutralizado para independencia total
export const base44 = () => ({
  // Funciones vacías para que el código no rompa
  get: async () => ({ data: {} }),
  post: async () => ({ data: {} }),
});

export const createClient = () => base44();