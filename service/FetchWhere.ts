import { db } from "@/lib/firebase";
import { AffiliateTypes } from "@/Types/Affiliate";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FetchWhereTypes } from "@/Types/FetchWhere";



export const fetchWhere = async({QueryData, RefereceQuery, DbReference}: FetchWhereTypes ) => {
  if (!QueryData || !RefereceQuery || !DbReference) return;

  const snap = query(
    collection(db, DbReference),
    where(RefereceQuery, "==", QueryData),
  );

  const datasnap = await getDocs(snap);

  const data = datasnap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AffiliateTypes),
  }));
  return data;
};

