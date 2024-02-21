// Define signature image filenames for each pharmacist
const pharmacistSignatures = {
    pharmacist1: 'SelwynJohn.png',
    pharmacist2: 'signature2.jpg',
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
        const signatureImage = pharmacistSignatures[pharmacist]; // Get signature image filename for selected pharmacist
        const certificateName = document.getElementById("certificate").selectedOptions[0].text; // Get the name of the selected certificate

        const certificateHTML = `
            <div class="certificate">
                <div class="certificate-content">
                    <img src="images/${certificateImage}" alt="Certificate Template">
                    <div class="text-overlay">
                        <img src="signatures/${signatureImage}" alt="Pharmacist Signature" class="signature1">
                        <p class="date1">${date}</p>
                        <p class="name">${name}</p>
                        <p class="date2">${date}</p>
                    </div>
                </div>
                <button class="downloadCertificate"><img src="download.png" alt="Download Icon"></button>
            </div>
        `;
        certificateContainer.innerHTML += certificateHTML;
    });

    // After generating certificates, enable the download buttons and attach event listeners
    const downloadButtons = document.querySelectorAll('.downloadCertificate');
    downloadButtons.forEach((button, index) => {
        button.addEventListener("click", () => downloadCertificate(index, names[index], certificateName, date));
    });

    // Enable the download all certificates button
    document.getElementById("downloadAll").disabled = false;
}

// Function to download individual certificate as PDF
function downloadCertificate(index) {
    const certificates = document.querySelectorAll('.certificate');
    const certificate = certificates[index];
    const nameElement = certificate.querySelector('.name');
    const certificateName = document.getElementById("certificate").selectedOptions[0].text;
    const date = new Date(document.getElementById("date").value).toLocaleDateString('en-GB');

    const pdfOptions = {
        filename: `${nameElement.textContent.trim()}_${certificateName}_${date}.pdf`,
        // Add other PDF options as needed
    };

    const htmlContent = certificate.innerHTML;

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
