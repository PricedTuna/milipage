import { db } from "../DB/firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { User } from "../domain/models/User";


export const saveUser = async (data: User) => {
  try {
    const userRef = await addDoc(collection(db, "users"), data);
    console.log("Documento guardado con ID:", userRef.id);
    return userRef;
  } catch (error) {
    console.error("Error al guardar documento:", error);
  }
};

export const loginUser = async (numeroCuenta: string, password: string) => {
  try {
    // Crear una referencia a la colección "users"
    const usersRef = collection(db, "users");

    // Crear una consulta para buscar al usuario con el número de cuenta
    const q = query(usersRef, where("numeroCuenta", "==", numeroCuenta));

    // Obtener los documentos que coinciden con la consulta
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("Usuario no encontrado");
      return null; // Si no se encuentra el usuario, retorna null
    }

    // Si encontramos el usuario, verificamos la contraseña
    const userDoc = querySnapshot.docs[0]; // Solo debería haber un documento por número de cuenta
    const userData = userDoc.data() as User; // Obtenemos los datos del usuario

    if (userData.password === password) {
      console.log("Inicio de sesión exitoso");
      return userData; // Devuelve los datos del usuario si la contraseña es correcta
    } else {
      console.log("Contraseña incorrecta");
      return null; // Si la contraseña no es correcta, retorna null
    }
  } catch (error) {
    console.error("Error al intentar iniciar sesión:", error);
    return null;
  }
};
