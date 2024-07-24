import React, { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  Query,
} from "firebase/firestore";
import { db } from "../fireBase";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, data));

  //Firestoreからリアルタイムデータを取得しReactのステートに設定する
  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, []);

  return { documents };
};
export default useCollection;
