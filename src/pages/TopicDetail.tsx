import NavBar from "../components/NavBar";
import TopicPage from "../components/TopicPage";

function TopicDetail() {
    return (
        <>
        <NavBar />
        <div className="mainContainer">
            <div className="bgFrame">
                {/* หัวข้อและคำอธิบาย */}
                <TopicPage page="A04 Insecure Design" />
                <p className="contentParagraph">Insecure Design คือการ Design ระบบ Architecture ที่ผิดพลาดเป็นช่องโหว่ที่โฟกัสความ
                เสี่ยงที่จะเกิดขึ้นหากไม่ออกแบบความปลอดภัยในขั้นตอนการใช้งานแต่ละส่วนบนเว็บแอพลิเคชั่น ด้วย
                การทำ Threat modeling ซึ่ง model จะมีความแตกต่างกันออกไปในแต่ละธุรกิจ เช่น การอนุญาตให้
                แก้ไขข้อมูลสำคัญเช่น email โดยไม่ได้ถาม password ก่อน ทำให้บุคคลอื่นสามารถกด forgot
                password เพื่อตั้งค่ารหัสผ่านใหม่ได้ทันทีที่เซ็ตอีเมลใหม่ได้</p>
                <p className="contentParagraph">Threat Modeling คือการวิเคราะห์และสร้างแบบจำลองของภัยคุกคาม เพื่อหาวิธีและ
                เครื่องมือในการป้องกันที่เหมาะสม โดยจะมุ่งเน้นไปที่ Model STRIDE</p>
                <p className="contentParagraph">STRIDE เป็นหนึ่งโมเดลที่นิยมใช้มากที่สุด ใช้สำหรับการวิเคราะห์ระบบที่เป็นแบบ in-place
                โดยเริ่มจากการทำ data-flow diagrams (DFDs) เพื่อระบุ system entities, ระบุ event และระบุ
                ขอบเขตของระบบ จากนั้นก็แบ่งกลุ่ม Threats เป็น 6 กลุ่ม ตามพฤติกรรมและ Property ที่ถูก
                violate (ละเมิด) ดังตารางที่แสดงต่อไปนี้</p>
                {/* หัวข้อตัวอย่างการโจมตี */}
                <p className="subTopic">ตัวอย่างการโจมตี</p>
                <p className="contentParagraph">Scenario #1: ขั ้นตอนการกู ้คืนข้อมูลด้วยการใช้ระบบคำถามลืมรหัสผ่าน (ระบบ “questions and 
                answers”) ซึ ่ง NIST 800-63b, OWASP ASVS และ OWASP Top 10 ห้ามมิให้เชื ่อถือเนื ่องจากมี
                บุคคลมากกว่าหนึ ่งคน สามารถรู ้คำตอบได้จึงห้ามไว้ ควรลบโค้ดดังกล่าวออกและแทนที ่ด้วยการ
                ออกแบบที่ปลอดภัยยิ่งขึ้น </p>
                {/* image */}
                <img className="contentImg" src="https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/6256fdfb247c55a0e1072b2e_Insecure%20Design%20Preview-p-800.jpeg" alt="A04"></img>
                <p className="contentParagraph">Scenario #2: เว็บจองที ่นั ่งซื ้อตั ๋วหนังอนุญาตให้ลูกค้าสามารถใช้โค้ดส่วนลดได้ไม่เกิน 15 คนแต่ผู ้ไม่
                หวังดีสามารถจำลองการโจมตีในส่วนขั ้นตอนการใช้ส่วนลดได้โดยพยายามจองที ่นั ่งทั ้งหมดในโรงหนัง
                ด้วยส่วนลดนี้ ในเวลาเดียวกันจากไม่กี่ requests ส่งผลให้สูญเสียรายได้มหาศาล  </p>
                <p className="contentParagraph">Scenario #3: เว็บไซต์ e-commerce ของเครือข่ายค้าปลีกไม่มีการป้องกันบอทที่ดำเนินการโดยนักเก็ง
                กำไรที ่ซื ้อ video card ระดับ high-endเพื ่อขายต่อเว็บไซต์ประมูล สิ ่งนี ้สร้างการโฆษณาเผยแพร่ที ่แย่
                มากสำหรับผู้ผลิตการ์ดและเจ้าของร้านค้าปลีกและต้องทนกับความไม่พอใจ หรือภาพลักษณ์ที่ไม่ดีกับผู้
                ที่ชื่นชอบที่ไม่สามารถซื้อการ์ดเหล่านี้ได้ไม่ว่าราคาเท่าไหร่ก็ตาม ควรมีการออกแบบ anti-bot design 
                และ domain logic rulesอย่างระมัดระวัง เช่น การซื ้อที ่ทำภายในไม่กี ่วินาทีที ่มีความพร้อมกัน อาจ
                ระบุการซื้อที่ไม่ถูกต้องและปฏิเสธธุรกรรมดังกล่าว  </p>
                {/* หัวข้อแนวทางการป้องกัน */}
                <p className="subTopic">แนวทางการป้องกันปัญหาช่องโหว่ </p>
                <ul className="HowToPrevent">
                    <li>ร่วมมือกับผู้เชี่ยวชาญด้าน Application Security (AppSec) เพื่อวางแผนและใช้ Secure Development 
                    Lifecycle เพื่อประเมินและออกแบบควบคุมที่เกี่ยวกับความปลอดภัยและความเป็นส่วนตัว </li>
                    <li>สร้างและใช้ library ของ Secure Design Patterns เพื่อการใช้งานรวดเร็ว หรือพื้นที่เตรียมไว้สำหรับการ
                    ใช้งานที่มีความปลอดภัย </li>
                    <li>ใช้ Threat Modeling สำหรับการวางแผนที่เกี่ยวกับ authentication, access control, business logic, 
                    และ key flows ที่สำคัญ </li>
                    <li>รวมภาษาและควบคุมที่เกี่ยวข้องกับความปลอดภัยลงใน User Stories ของโปรแกรม </li>
                    <li>ทำ Plausibility Checks (การตรวจสอบความน่าเชื่อถือ) แต่ละ Tier ของแอปพลิเคชัน (จาก Frontend 
                    ถึง Backend) </li>
                    <li>เขียนทดสอบ Unit และ Integration เพื่อยืนยันว่าทุกระบบสามารถต้านทานต่อ Threat Model ได้
                    รวบรวม Use-cases และ Misuse-cases สำหรับแต่ละ Tier </li>
                    <li>จำกัดการใช้ทรัพยากรโดย user หรือ service หรือทำการควบคุมการใช้งานเพื่อป้องกันการโจมตีที่เป็นไป
                    ได้ที่เกิดขึ้นจากรายละเอียดที่ไม่ถูกต้องหรือการใช้ทรัพยากรเกินไป </li>
                </ul>
                {/* ปุ่ม Begin */}
                <div className="btnContainer">
                    <button className="beginBtn">Begin Challenge</button>
                </div>
            </div>

            {/* กรอบ Flag Submition */}
            <div className="bgFrame">
                <TopicPage page="Flag Submission" />
                <div className="flag-container1">
                    <div className="flag-container-div1"><p>Challenge done</p></div>
                    <div className="flag-container-div2"><p>1801 solves</p></div>
                </div>
                {/* download or link  */}
                <div className="flag-container2">
                    <div><button className="dlBtn">Download File</button></div>
                    <div><p>or</p></div>
                    <div><a className="linkDL" href="https://google.com" target="_blank">www.google.com</a></div>
                </div>
                {/* submit form  */}
                <div className="flag-container3">
                    <form>
                        <label>
                            Flag Submit:<br></br>
                            <input id="txtInput" type="text" name="name" placeholder="submit flag here" />
                        </label>
                        <input id="submitInput" type="submit" value="Submit" />
                        </form>
                </div>

            </div>



        </div>
        </>
    );
}

export default TopicDetail;
