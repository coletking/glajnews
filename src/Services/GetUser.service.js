"use client";
import { database } from "../firebase";
import { TimestampDate } from "timestamp-date";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

const timestampDate = new TimestampDate();

export const getPost = async (id, cd) => {
  const querySnapshot = await getDocs(collection(database, "posts"));

  querySnapshot.forEach((doc) => {
    const data = doc.data()
    console.log(data)
    cd(data)
  });

};


export const Token = () => {
  const token = global.window.localStorage.getItem("token");
  return token;
};

// export const getuseraccount = (AccountNumber) => {
//   return new Promise((resolve) => {
//     const ref = database.collection("posts");
//     let reference = ref;

//     if (AccountNumber) {
//       reference = reference.where("AccountNumber", "==", AccountNumber);
//     }
//     reference.onSnapshot((queryproduct) => {
//       const items = [];
//       queryproduct.forEach((doc) => {
//         const item = doc.data();
//         item.id = doc.id;
//         items.push(timestampDate.parseTimestampToDate(item));
//       });

//       resolve(items);
//     });
//   });
// };

export const getusers = async (id, cb) => {
  const orderedQuery = query(
    collection(database, "user"),
    orderBy("created", "desc")
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });

  cb(items);
};

export const getPosts = async (id, cb) => {
  const orderedQuery = query(
    collection(database, "posts"),
    orderBy("createdAt", "desc")
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
  
  cb(items);
};

export const getMessages = async (id, cb) => {
  const orderedQuery = query(
    collection(database, "contact"),
    orderBy("createdAt", "desc")
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
  
  cb(items);
};

export const getPostsByID = async (id, cb) => {

  const orderedQuery = query(
    collection(database, "posts"),
    where("id", "==", id)
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
 
  cb(items);
};


export const getPostsbyCateories = async (category, cb) => {
  console.log(category)
  const orderedQuery = query(
    collection(database, "posts"),
    where("category", "==", category),
    orderBy("createdAt", "desc")
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
 
  cb(items);
};

export const getVideoPost = async (car,cb) => {
  const orderedQuery = query(
    collection(database, "posts"),
    where("fileType", "==", 'video'),
    orderBy("createdAt", "desc")
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
 
  cb(items);
};



// export const getPostsbyCateories = (category, cb) => {
//   const ref = database.collection("posts").orderBy("createdAt", "desc");
//   let reference = ref;
//   if (category) {
//     reference = reference.where("category", "==", category);
//   }
//   reference.onSnapshot((queryproduct) => {
//     const items = [];
//     queryproduct.forEach((doc) => {
//       const item = doc.data();
//       item.id = doc.id;
//       items.push(timestampDate.parseTimestampToDate(item));
//     });
//     cb(items);
// });
// };

// export const getUsers = (id, cb) => {
//   const ref = database.collection("user");
//   let reference = ref;
//   if (id) {
//     reference = reference.where("id", "==", id);
//   }
//   reference.onSnapshot((queryproduct) => {
//     const items = [];
//     queryproduct.forEach((doc) => {
//       const item = doc.data();
//       item.id = doc.id;
//       items.push(timestampDate.parseTimestampToDate(item));
//     });
//     cb(items);
// });
// };
