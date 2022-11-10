// import React from "react";
// import { useEffect } from "react";
// // import { users } from "../../../api";
// const withQuery = (Component) => {
//     return ({userGuid}) => {
//         const [user, setUser] = useState(null);

//         useEffect(()=>{
//             users.getById(userGuid).then((r)=>{
//                 setUser(r);
//             })
//         }, [userGuid]);
//         return user ? <Component {...user} />:<div>Загрузка</div>
//     }
// }

// export default withQuery;
