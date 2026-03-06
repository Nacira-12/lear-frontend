// URL de l'API backend
const API_URL = 'https://lear-backend.onrender.com/api';

// Fonction pour créer une suggestion
async function creerSuggestion(data) {
  try {
    const response = await fetch(`${API_URL}/suggestion/creer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erreur:', error);
    return { 
      success: false, 
      message: 'Erreur de connexion au serveur' 
    };
  }
}

// Fonction pour générer un QR code
async function genererQRCode() {
  try {
    const response = await fetch(`${API_URL}/qrcode/generer`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erreur:', error);
    return { 
      success: false, 
      message: 'Erreur de connexion au serveur' 
    };
  }
}

// Fonction pour récupérer toutes les suggestions
async function obtenirSuggestions() {
  try {
    const response = await fetch(`${API_URL}/suggestion/liste`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erreur:', error);
    return { 
      success: false, 
      message: 'Erreur de connexion au serveur' 
    };
  }
}
