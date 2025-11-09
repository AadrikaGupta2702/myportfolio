// lib/firestoreHelpers.ts
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getCollection(col: string) {
  const snap = await getDocs(collection(db, col));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function updateDocument(col: string, id: string, payload: any) {
  return updateDoc(doc(db, col, id), payload);
}

export async function createDocument(col: string, payload: any) {
  return addDoc(collection(db, col), payload);
}

export async function deleteDocument(col: string, id: string) {
  return deleteDoc(doc(db, col, id));
}
