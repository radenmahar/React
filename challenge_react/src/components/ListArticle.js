import React from "react";

class List extends React.Component {
  render() {
    return (
      <div>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1 text-primary">
                <strong>BERITA TERKINI</strong>
              </h6>
              <small className="text-primary">Lihat Semua</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1 text-danger">#1</h6>
              <small className="text-muted">3 Hari lalu</small>
            </div>
            <p className="mb-1">
              <strong>
                Kemenangan atas Chelsea, Hadiah bagi United yang Berani Ambil
                Risiko.
              </strong>
            </p>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1 text-danger">#2</h6>
              <small className="text-muted">2 Jam lalu</small>
            </div>
            <p className="mb-1">
              <strong>21 Menit yang Lumpuhkan Ibu Kota</strong>
            </p>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1 text-danger">#3</h6>
              <small className="text-muted">1 hari lalu</small>
            </div>
            <p className="mb-1">
              <strong>
                Penjelasan Calon Istri soal Idul Adha Pertama Deddy Corbuzier
              </strong>
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default List;
