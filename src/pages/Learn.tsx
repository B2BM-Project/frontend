import './Learn.css';
import Login_Comp from "../components/Login_Comp";

const cardData = [
  { id: "A01", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
  { id: "A02", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
  { id: "A03", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
  { id: "A04", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
  { id: "A05", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
  { id: "A06", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
  { id: "A07", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
  { id: "A08", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
  { id: "A09", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
  { id: "A10", img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", progress: 100 },
];

function Learn() {
  return (
    <div>
      <Login_Comp />
      <div className="mainContainer">
        <div className="bgFrame grid grid-cols-2 gap-6">
          {/* แสดงการ์ดทั้งหมดด้วย map */}
          {cardData.map((card, index) => (
            <div key={index} className="flex justify-between pb-[0px]  mt-[30px]">
              <div className="card image-full w-96 shadow-xl mr-[20px]">
                <figure>
                  <img src={card.img} alt={`Card ${card.id}`} />
                </figure>
                <div className="content-between">
                  <h2 className="card-title text-[#000]">{card.id}</h2>
                </div>
                <div className="z-[100] flex items-end">
                  <progress
                    className="progress progress-error w-full pb-[0.5px]"
                    value={card.progress}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learn;
