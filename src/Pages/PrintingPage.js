import React, { ReactDOM, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "../Styles/general.css";
import { useIonAlert } from '@ionic/react';

function PrintingPage(props) {
  const printers = {
    "CƠ SỞ 1 - LÝ THƯỜNG KIỆT": [
      { name: "PRINTER0", location: "B2 - 212" },
      { name: "PRINTER1", location: "B4 - 405" },
      { name: "PRINTER2", location: "C2 - 101" },
    ],
    "CƠ SỞ 2 - ĐỒNG HÒA, DĨ AN": [
      { name: "PRINTER3", location: "H3 - 303" },
      { name: "PRINTER4", location: "H2 - 202" },
      { name: "PRINTER5", location: "H1 - 404" },
      { name: "PRINTER6", location: "H6 - 201" },
    ],
  }
  const [showAlert, hideAlert] = useIonAlert();
  const [step, setStep] = useState(0);
  const [file, setFile] = useState(null);
  const [printFrom, setPrintFrom] = useState(0);
  const [printTo, setPrintTo] = useState(0);
  const [printTwoFace, setPrintTwoFace] = useState(true);
  const [totalPages, setTotalPages] = useState(null);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const updateTotalPages = () => {
    var pages = (printTo - printFrom + 1);
    if (printTwoFace)
      pages = Math.ceil(pages / 2);
    setTotalPages(pages);
    // console.log("from ", printFrom);
    // console.log("to ", printTo);
    // console.log("2faces ", printTwoFace);
    // console.log("pages ", pages);
    // console.log("================= >> totalpages ", totalPages);
  };
  useEffect(() => {
    updateTotalPages();
  }, [printFrom, printTo, printTwoFace]);

  if (props.username == null) {
    return (<Navigate to="/login"></Navigate>)
  }

  const moveToSelectPrinters = () => {
    if (totalPages > props.balance) {
      const alert = (
      <div class="card" style={{ background: "#ff7d7d", fontWeight: "bold" }} onClick={() => { document.getElementById("alert").innerHTML = "" }}>Bạn không đủ số dư giấy in
        <p>Vui lòng mua thêm giấy in hoặc giảm số trang in</p>
      </div>);
      ReactDOM.render(alert, document.getElementById("alert"));
    }
    else
      setStep(1)
  }
  const moveToSettingsPrinting = () => {
    setStep(0)
  }
  const clickSelectFile = () => {
    document.getElementById("printing_file").click();
  }
  const handleFileChange = (e) => {
    const selected = e.target.files[0]
    setFile(selected);
  };




  const settingsPage =
    <div style={{
      display: "grid",
      gridTemplateRows: "250px 50px",
      padding: "10px",
    }}>
      <div style={{ maxwidth: "600px" }}>
        <div className="card" onClick={clickSelectFile}>
          <strong>Chọn tệp in từ thiết bị</strong>
          <p>Tên tệp: {file != null ? file.name : "chưa có"}</p>
          <input id="printing_file" type="file" accept="application/pdf" onChange={handleFileChange} hidden />
        </div>
        <div className="group">
          <div style={{ display: "" }}>
            <label>
              In từ trang <input type="number" onChange={(e) => setPrintFrom(e.target.value)} />
            </label>
            <label>
              đến trang <input type="number" onChange={(e) => setPrintTo(e.target.value)} />
            </label>
            <br></br>
            <label>
              In hai mặt <input type="checkbox" onClick={(e) => setPrintTwoFace(e.target.checked)} />
            </label>
            <span>Tổng <strong>{totalPages}</strong> tờ giấy in</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/print">
          <button className="prime-button" onClick={moveToSelectPrinters}>Chọn máy in</button>
        </Link>
      </div>
    </div>;

  const selectPrinterPage =
    <div style={{ padding: "10px" }}>

      <div className="group">
        <p>
          Máy in đã chọn: <strong>{selectedPrinter != null ? selectedPrinter.name : "chưa chọn"}</strong>
        </p>
        <p>Vị trí: {selectedPrinter != null ? selectedPrinter.location : "chưa chọn"}</p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Object.entries(printers).map(([title, printerList]) => (
          <div className="group" style={{ flex: "1", margin: "0 10px" }}>
            <h3>{title}</h3>
            <div>
              {printerList.map((printer) => (
                <div
                  key={printer.name}
                  className="card"
                  style={selectedPrinter != null && selectedPrinter.name === printer.name ? { border: "2px solid #aaa", background: "#cccccc" } : {}}
                  onClick={() => setSelectedPrinter(printer)}
                >
                  <p><strong>{printer.name}</strong></p>
                  <p>{printer.location}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Print Button */}
      <div style={{ display: "flex", maxWidth: "200px", margin: "10px auto" }}>
        <button style={{ marginInlineEnd: "20px", width: "100px" }} onClick={moveToSettingsPrinting}>Quay lại</button>
        <button style={{ width: "100px" }} className="prime-button">In tài liệu</button>
      </div>
    </div>;

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <div style={{ marginRight: "10px", textAlign: "center" }}>
          <Link to="/">
            <button className="button">Thoát</button>
          </Link>
        </div>
        <div style={{ textAlign: "center", padding: "10px" }}>
          <span>Số dư giấy in : {props.balance}</span>
          <strong style={{ marginInlineEnd: "10px" }}>{props.user_balance}</strong>
          <Link to="/buy-pages">
            <a>Mua thêm giấy in</a>
          </Link>
        </div>
      </div>

      <div id="alert" style={{ width: "100%", height: "100%", textAlign: "center" }}>

      </div>

      {step == 0 ? settingsPage :
        step == 1 ? selectPrinterPage : <div></div>}
    </div>);
};

export default PrintingPage;
