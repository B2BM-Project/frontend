/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string; 
  message: string; 
  onConfirm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;  // เปลี่ยนประเภทให้รองรับ async function
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, title, message, onConfirm }) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose(); // ปิด modal เมื่อกด ESC
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    const modal = document.querySelector(".modal-box") as HTMLElement;
    if (modal && !modal.contains(e.target as Node)) {
      onClose(); // ปิด modal เมื่อคลิคนอก modal
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // ลบ event listener เมื่อ modal ถูกปิด
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null; // ซ่อน modal ถ้า `isOpen` เป็น false

  // ป้องกันการรีเฟรชเมื่อกดปุ่ม
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // หยุดการทำงานของปุ่มที่อาจจะทำให้หน้ารีเฟรช
    onConfirm(e); // เรียกฟังก์ชัน onConfirm ที่ถูกส่งผ่าน prop
  };

  return (
    <>
    {/* Backdrop สำหรับเพิ่ม opacity */}
    <div className="fixed inset-0 bg-black bg-opacity-70 z-40"></div>
    <dialog open className="modal modal-middle  z-50">
      <div className="modal-box bg-[#272528]">
        <h3 className="text-lg font-bold text-center">{title}</h3>
        <p className="py-4 text-center">{message}</p>
        <div className="modal-action justify-center	">
          <button className="h-9 w-4/5	border-solid border-2 border-gray-500 rounded-md bg-white/[.8] 	text-black font-semibold	" onClick={onClose}>
            Close
          </button>
          <button className="h-9 w-4/5	border-solid border-2 border-indigo-800 rounded-md bg-indigo-800" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </dialog>
    </>
  );
};

export default ConfirmModal;
