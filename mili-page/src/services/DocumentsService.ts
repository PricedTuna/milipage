import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../DB/firebaseConfig";
import { documentRequest } from "../domain/models/documentRequest";

export const getUserRequests = async (usuarioRequest: string) => {
  try {
    // Referencia a la colección 'requests'
    const requestsRef = collection(db, "requests");

    // Consulta para obtener todos los documentos donde 'usuarioRequest' coincida con el parámetro
    const q = query(requestsRef, where("usuarioRequest", "==", usuarioRequest));

    // Obtener los documentos que coinciden con la consulta
    const querySnapshot = await getDocs(q);

    // Si no hay documentos, retornamos un arreglo vacío
    if (querySnapshot.empty) {
      console.log("No se encontraron solicitudes para este usuario.");
      return [];
    }

    // Procesar los documentos obtenidos
    const requests = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return requests;
  } catch (error) {
    console.error("Error al obtener solicitudes de usuario:", error);
    return [];
  }
};


export const requestDocument = async (data: documentRequest) => {
  try {
    const requestRef = await addDoc(collection(db, "requests"), data)
    console.log("Documento guardado con ID:", requestRef.id);
    return requestRef
  } catch (error) {
    console.error("Error al guardar documento:", error);
  }
}

