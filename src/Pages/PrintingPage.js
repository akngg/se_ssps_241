import React, { ReactDOM, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "../Styles/general.css";
import { fireEvent } from "@testing-library/react";

function PrintingPage(props) {
  const printers = {
    "CƠ SỞ 1 - LÝ THƯỜNG KIỆT": [
      { name: "PRINTER0", location: "Lý Thường Kiệt : B2-212" },
      { name: "PRINTER1", location: "Lý Thường Kiệt : B4-405" },
      { name: "PRINTER2", location: "Lý Thường Kiệt : C2-101" },
    ],
    "CƠ SỞ 2 - ĐỒNG HÒA, DĨ AN": [
      { name: "PRINTER3", location: "Dĩ An : H3-303" },
      { name: "PRINTER4", location: "Dĩ An : H2-202" },
      { name: "PRINTER5", location: "Dĩ An : H1-404" },
      { name: "PRINTER6", location: "Dĩ An : H6-201" },
    ],
  }
  const [step, setStep] = useState(0);
  const [file, setFile] = useState(null);
  const [printFrom, setPrintFrom] = useState(0);
  const [printTo, setPrintTo] = useState(0);
  const [printTwoFace, setPrintTwoFace] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const updateTotalPages = () => {
    var pages = (printTo - printFrom + 1);
    if (printTwoFace)
      pages = Math.ceil(pages / 2);
    setTotalPages(pages);
  };
  useEffect(() => {
    updateTotalPages();
  }, [printFrom, printTo, printTwoFace]);

  if (props.username == null) {
    return (<Navigate to="/login"></Navigate>)
  }

  const moveToSettingsPrinting = () => {
    setStep(0);
  }
  const moveToSelectPrinters = () => {
    if (printFrom <= 0 || printTo <= 0 || printTo < printFrom)
      alert("Số trang in không hợp lệ");
    else if (totalPages > props.balance)
      alert("Bạn không đủ giấy in, vui lòng mua thêm hoặc giảm số trang in !");
    else if (file == null)
      alert("File in không hợp lệ");
    else
      setStep(1)
  }
  const moveToBuyPages = () => {
    setStep(2);
  }
  const moveToBill = () => {
    if (selectedPrinter == null)
      alert("Hãy chọn một máy in");
    else if (selectedPrinter.name == "PRINTER0")
      alert("Máy in PRINTER0 hiện đang bận, vui lòng chọn máy in khác");
    else
      setStep(3);
  }
  const clickSelectFile = () => {
    document.getElementById("printing_file").click();
  }
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    //console.log(selected);
  };
  const handleBuyPages = () => {
    var pages = document.getElementById("pages-input").value;
    if (isNaN(parseInt(pages)))
      alert("Số giấy không hợp lệ");
    else {
      props.addBalance(pages);
      alert("Mua thêm thành công");
      moveToSettingsPrinting();
    }
  }




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
              In từ trang <input type="number" min="1" value={printFrom} onChange={(e) => setPrintFrom(e.target.value)} />
            </label>
            <label>
              đến trang <input type="number" min="1" value={printTo} onChange={(e) => setPrintTo(e.target.value)} />
            </label>
            <br></br>
            <label>
              In hai mặt <input type="checkbox" onClick={(e) => setPrintTwoFace(e.target.checked)} defaultChecked={printTwoFace}/>
            </label>
            <span>Tổng <strong>{totalPages}</strong> tờ giấy in</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="prime-button" onClick={moveToSelectPrinters}>Chọn máy in</button>
      </div>
    </div>;

  const buyPage =
    <div>
      <div>
        <label>
          Nhập số trang muốn mua thêm:
        </label>
        <div>
          <input id="pages-input" type="number" min="1" />
          <button class="prime-button" onClick={handleBuyPages}>Xác nhận</button>
        </div>
        <p>
          Xác nhận mua sẽ thêm hoá đơn vào BK-Pay và chuyển hướng bạn đến BK-Pay để tiến hành thanh toán hoá đơn.
        </p>
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

      <div style={{ display: "flex", maxWidth: "200px", margin: "10px auto" }}>
        <button style={{ marginInlineEnd: "20px", width: "100px" }} onClick={moveToSettingsPrinting}>Quay lại</button>
        <button style={{ width: "100px" }} className="prime-button" onClick={moveToBill}>In tài liệu</button>
      </div>
    </div>;

  const billPage =
    <div style={{ padding: "10px" }}>
      <div className="status">
        <span>✓ Tài liệu của bạn đang được in</span>
      </div>
      <div className="info-card">
        <p>
          <strong>Mã bản in:</strong> #2985 | <strong>Máy in:</strong>{" "}
          {selectedPrinter != null ? selectedPrinter.name : ""} ({selectedPrinter != null ? selectedPrinter.location : ""}) | {(new Date().toString())}
        </p>
        <p>
          <strong>Tên tệp : </strong>{file != null ? file.name : "chưa có"}
        </p>
        <p>
          <strong>Kích thước : </strong>{file != null ? Math.round((file.size / (1024*1024)) * 100) / 100 : "chưa có"} MB
        </p>
        <p>
          <strong>Số trang in : </strong>{printTo - printFrom + 1}
        </p>
        <p>
          <strong>Số giấy in : </strong>{totalPages}
        </p>
        <p>
          <strong>In hai mặt : </strong>{printTwoFace ? "có" : "không"}
        </p>
        <p>
          <strong>MSSV : </strong>2211758
        </p>
      </div>
      <Link to="/">
        <button className="prime-button">✔ Quay lại trang chủ</button>
      </Link>
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
          {step != 2 ? <button onClick={moveToBuyPages}>Mua thêm giấy in</button>
            : <button onClick={moveToSettingsPrinting}>Quay lại in tài liệu</button>}
        </div>
      </div>

      {step == 0 ? settingsPage
        : step == 1 ? selectPrinterPage
          : step == 2 ? buyPage
            : step == 3 ? billPage
              : <div></div>}
    </div>);
};

export default PrintingPage;
