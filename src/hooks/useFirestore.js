import { cond } from "lodash"
import React, { useEffect } from "react"
import { db } from "../firebase/config"

const useFirestore = (collection, condition) => {
     useEffect(() => {
        let collectionRef = db.collection(collection).orderBy('createdAt')

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                return
            }
            collectionRef.where(condition.fieldName, condition.operator, condition.compareValue)
        }

        collectionRef


        
        .onSnapshot((snapshot) => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }))

            console.log({ data, snapshot, docs: snapshot.docs })
        })
    }, [])
}

export default useFirestore