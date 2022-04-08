import React from "react";

function ArAyah(props) {
    const { text, number, index } = props;
    const convertToArabicNumbers = (num) => {
        const arabicNumbers =
            "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
        return new String(num).replace(/[0123456789]/g, (d) => {
            return arabicNumbers[d];
        });
    };
    return (
        <div className="h-auto mx-12 lg:mx-64">
            <div dir="rtl">
                <div
                    key={number}
                    className="px-4 py-2 my-2 rounded-xl text-center bg-white bg-opacity-50  text-xl md:text-2xl"
                >
                    {text}
                    {index != 0 && (
                        <a className="mr-4 px-4 border-slate-600 rounded-md border-2">
                            {index !== 0 ? convertToArabicNumbers(index) : ""}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ArAyah;
