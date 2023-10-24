// import { createContext } from "react";
// import { useState } from "react";
// export const FavoriteContext = createContext({
//   ids: [],
//   addFavorite: (id) => {},
//   removeFavorite: (id) => {},
// });

// const FavoriteContextProvider = ({ children }) => {
//   const [ids, setIds] = useState([]);
//   const addFavorite = (id) => {
//     setIds([...ids, id]);
//   };
//   const removeFavorite = (id) => {
//     setIds(ids.filter((item) => item !== id));
//   };
//   return (
//     <FavoriteContext.Provider value={{ ids, addFavorite, removeFavorite }}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// }
// export default  FavoriteContextProvider;