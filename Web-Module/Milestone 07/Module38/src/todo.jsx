// export default function Todo({task}){
//     return(
//         <li>Task : {task}</li>
//     )
// }

//Conditional Rendering Option 1

// export default function Todo({ task , isDone }) {
//     if (isDone === true) {
//         return <li>Finished Task : {task}</li>
//     }
//     else{
//         return <li>Work On : {task}</li>
//     }
// }


//Conditional Rendering Option 2
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished Task : {task}</li>
//     }
//     return <li>Work On : {task}</li>
// }

// Conditional Rendering Option 3
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{isDone ? 'Finished' : 'Work On'} : {task}</li>
//     )
// }


// //Conditional Rendering Option 4 - &&
// export default function Todo({task,isDone}){
//     return(
//         <li>Task : {task} {isDone && ': Done'}</li>
//     )
// }

//Conditional Rendering Option 5 - ||
// export default function Todo({task,isDone}){
//     return(
//         <li>Task : {task} {isDone || ': Do It'}</li>
//     )
// }

//Conditional Rendering Option 6
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finished Task : {task}</li>
    }
    else{
        listItem = <li>Work On : {task}</li>
    }
    return listItem
}