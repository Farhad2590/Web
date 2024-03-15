export default function Singer(singer){
    console.log(singer.singer);

    return(
        <div>
            <h3>Name: {singer.singer.name}</h3>
            <p>Id: {singer.singer.id}</p>
            <p>Age: {singer.singer.age}</p>
        </div>
    )
}