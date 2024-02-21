// Define signature image filenames for each pharmacist
const pharmacistSignatures = {
    pharmacist1: 'Aarti Kundalia.png',
    pharmacist2: 'Ali Ameen.png',
    pharmacist3: 'Andrea McGlade.png',
    pharmacist4: 'Aysha Hoque.png',
    pharmacist5: 'Bill Carcary.png',
    pharmacist6: 'Carol fletcher.png',
    pharmacist7: 'charlotte stranks.png',
    pharmacist8: 'Chun Ting Lam.png',
    pharmacist9: 'Cisca Van der Lith.png',
    pharmacist10: 'Claire Whitehead.png',
    pharmacist11: 'Dalia Isaacson.png',
    pharmacist12: 'Dina Santos.png',
    pharmacist13: 'Edman Lo.png',
    pharmacist14: '.png',
    pharmacist15: '.png',
    pharmacist16: '.png',
    pharmacist17: '.png',
    pharmacist18: '.png',
    pharmacist19: '.png',
    pharmacist20: '.png',
    pharmacist21: '.png',
    pharmacist22: '.png',
    // Add more signatures for other pharmacists as needed
};

document.getElementById("generateCertificate").addEventListener("click", generateCertificates);

// Function to generate certificates
function generateCertificates() {
    const certificateTemplate = document.getElementById("certificate").value;
    const certificateImage = document.getElementById("certificate").selectedOptions[0].getAttribute("data-img");
    const pharmacist = document.getElementById("pharmacist").value;
    const rawDate = new Date(document.getElementById("date").value); // Convert input date to Date object
    const date = formatDate(rawDate); // Format date using custom function
    const names = document.getElementById("names").value.split(",").map(name => name.trim());

    const certificateContainer = document.getElementById("certificateContainer");
    certificateContainer.innerHTML = ""; // Clear previous certificates

    names.forEach((name, index) => {
        const certificateOption = document.getElementById("certificate").value; // Get the selected certificate option
        const certificateId = `certificate_${index + 1}`;
        const signatureImage = pharmacistSignatures[pharmacist]; // Get signature image filename for selected pharmacist

        // Generate HTML for each certificate with a unique identifier
        let certificateHTML = `
            <div class="certificate" id="${certificateId}">
                <div class="certificate-content">
                    <img src="images/${certificateImage}" alt="Certificate Template">
                    <div class="text-overlay">
                        <img src="signatures/${signatureImage}" alt="Pharmacist Signature" class="signature1">
                        <p class="date1">${date}</p>
                        <p class="name ${certificateOption}">${name}</p> <!-- Add class based on the selected certificate -->
                        <p class="date2">${date}</p>
                    </div>
                </div>
                <button class="downloadCertificate" onclick="downloadCertificate('${certificateId}')"><img src="download.png" alt="Download Icon"></button>
            </div>
        `;

        // Adjust position of p elements for Anaphylaxis certificate
        if (certificateTemplate === 'certificate2') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-anaphylaxis');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-anaphylaxis');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-anaphylaxis');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-anaphylaxis');
        }

        if (certificateTemplate === 'certificate3') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-asthma');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-asthma');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-asthma');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-asthma');
        }


        certificateContainer.innerHTML += certificateHTML;
    });

    // After generating certificates, enable the download buttons and attach event listeners
    const downloadButtons = document.querySelectorAll('.downloadCertificate');
    downloadButtons.forEach((button, index) => {
        button.addEventListener("click", () => downloadCertificate(index));
    });

    // Enable the download all certificates button
    document.getElementById("downloadAll").disabled = false;
}

// Function to download individual certificate as PDF
function downloadCertificate(certificateId) {
    const certificate = document.getElementById(certificateId);
    const htmlContent = certificate.innerHTML;

    const pdfOptions = {
        filename: `${certificateId}.pdf`,
        pagebreak: { mode: 'avoid-all' },
        html2canvas: { scale: 5 },
        jsPDF: { 
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4',
        } 
    };

    // Calculate the scale to fit content onto the A4 page
    const contentWidth = certificate.offsetWidth;
    const contentHeight = certificate.offsetHeight;
    const scale = Math.min(297 / contentWidth, 210 / contentHeight);

    // Set the scale option
    pdfOptions.jsPDF.scale = scale;

    // Generate and save the PDF
    html2pdf().set(pdfOptions).from(htmlContent).save();
}

// Function to download all certificates as PDF
document.getElementById("downloadAll").addEventListener("click", downloadAllCertificates);
function downloadAllCertificates() {
    // Generate and save the PDF
    html2pdf().from(document.getElementById("certificateContainer")).save();
}

// Function to format date
function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    // Add suffix to day (e.g., "13th")
    const day = date.getDate();
    const suffix = getDaySuffix(day);
    return formattedDate.replace(/\b(\d{1,2})(th|nd|rd|st)\b/, `$1${suffix}`);
}

// Function to get day suffix (e.g., "st", "nd", "rd", "th")
function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}
