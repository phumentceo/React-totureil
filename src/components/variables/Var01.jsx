function Var01 () {
    var name = "phument";
    var gender = "Male";
    var address = "Kompong Thome"
    return (
        <div>
            <h1 style={{
                color : "red",
                backgroundColor : "blue",
                }}>My Name   : {name} </h1>
            <h1>My Gender : {gender} </h1>
            <h1>Address   : {address}</h1>
        </div>
    );
}

export default Var01;