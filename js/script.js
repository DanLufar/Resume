document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("download-btn").addEventListener("click", function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Установка шрифта и заголовка
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Max Shevchenko", 20, 20);
        doc.setFontSize(16);
        doc.setTextColor(100);
        doc.text("Java Developer", 20, 30);

        doc.setFontSize(12);
        doc.setTextColor(0);
        
        let y = 50; // Начальная координата Y

        // Функция для добавления текста с переносами
        function addText(title, content, lineHeight = 6) {
            doc.setFont("helvetica", "bold");
            doc.text(title, 20, y);
            y += lineHeight;
            doc.setFont("helvetica", "normal");
            const splitText = doc.splitTextToSize(content, 170);
            doc.text(splitText, 20, y);
            y += splitText.length * lineHeight + 4;
        }

        // Разделы резюме
        addText("Contact Information:", "Email: mshevchenko1984@gmail.com\nPhone: +3 8095 400 83 16\nLinkedIn: linkedin.com/in/max-shevchenko-132096333/");
        addText("Summary:", "Motivated and detail-oriented Java Developer with a passion for writing clean, efficient, and maintainable code.");
        addText("Technical Skills:", "Java Core, Spring Framework, Hibernate, RESTful API Development, SQL (MySQL, PostgreSQL), Version Control (Git), Apache Tomcat, Maven, HTML, CSS.");
        addText("Soft Skills:", "Communication & Negotiation, Problem-Solving, Adaptability, Teamwork.");
        addText("Languages:", "English - Intermediate (B1)\nUkrainian - Native\nRussian - Native");
        addText("Education:", "Law degree, specialization: Jurisprudence (2001 - 2005).");
        addText("Certificates:", "Java Start Foxminded, Java Tools Foxminded, Java Pro IT school Hillel (Course completion by the end of March 2025).");

        // Сохранение PDF
        doc.save("Max_Shevchenko_Resume.pdf");
    });
});
