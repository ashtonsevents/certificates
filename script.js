// Define signature image filenames for each pharmacist
const pharmacistSignatures = {
    pharmacist1: 'Selwynjohn.png',
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

    names.forEach(name => {
        const signatureImage = pharmacistSignatures[pharmacist]; // Get signature image filename for selected pharmacist

        const certificateHTML = `
            <div class="certificate">
                <div class="certificate-content">
                    <img src="images/${certificateImage}" alt="Certificate Template">
                    <div class="text-overlay">
                        <img src="signatures/${signatureImage}" alt="Pharmacist Signature">
                        <h2>Certificate Template: ${certificateTemplate}</h2>
                        <p>Pharmacist: ${pharmacist}</p>
                        <p>Date: ${date}</p>
                        <p>Name: ${name}</p>
                    </div>
                </div>
            </div>
        `;
        certificateContainer.innerHTML += certificateHTML;
    });

    // After generating certificates, enable the download button and attach event listener
    document.getElementById("downloadAll").disabled = false;
    document.getElementById("downloadAll").addEventListener("click", downloadCertificates);
}

// Function to download certificates as PDF
function downloadCertificates() {
    const certificates = document.querySelectorAll('.certificate');
    const htmlContent = Array.from(certificates).map(certificate => certificate.innerHTML).join('');

    html2pdf().set({ 
        filename: 'certificates.pdf',
        orientation: 'landscape' // Set orientation to landscape
    }).from(htmlContent).save();
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
