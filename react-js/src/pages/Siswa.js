import Listsiswa from "./Listsiswa";

function Siswa() {

  const nama = ['Rara','Rere','Riri']

    return (
      <div className="App">
       
       <Listsiswa judul ={nama} />
       
      </div>
    );
  }
  
  export default Siswa;
  