import React from 'react';

export const getMapRender = (arr, render, ...param) => {
    // console.log(type);
    return (
        arr.map((el, i) =>
            <React.Fragment key={i}>
                {render(el, ...param, i)}
            </React.Fragment>)
    )
}
// export const getMapRenderFull = (arr, render, ...param) => {
//     return (
//         arr.map((el, i) => {
//             return (
//                 <React.Fragment key={i}>
//                     {render(el, ...param)}
//                 </React.Fragment>
//             )
//         }

//         )
//     )
// }

// export const getMapRenderNav = (arr, arr2, render) => {
//     // console.log(type);
//     return (
//         arr.map((el, i) =>
//             <React.Fragment key={i}>
//                 {render(el, arr2, i)}
//             </React.Fragment>)
//     )
// }