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
    pharmacist14: 'Elizabeth Park.png',
    pharmacist15: 'Ellie long.png',
    pharmacist16: 'Gail Eccott.png',
    pharmacist61: 'Gregg Simbwa.png',
    pharmacist17: 'Hawo Adan.png',
    pharmacist18: 'Ibrahim B.png',
    pharmacist19: 'Karen Higlett.png',
    pharmacist20: 'Karolina Powierza.png',
    pharmacist21: 'Katie grundy.png',
    pharmacist22: 'Krystle Banfield.png',
    pharmacist23: 'Kulbir Badyal.png',
    pharmacist24: 'Lydia Guirguis.png',
    pharmacist25: 'Manoj Kumar.png',
    pharmacist26: 'Margo Baran.png',
    pharmacist27: 'Mariam Braimoh.png',
    pharmacist28: 'Mario Manzo.png',
    pharmacist29: 'Marlyn Oritz.png',
    pharmacist30: 'Mary Wild.png',
    pharmacist31: 'Nabila Ditta.png',
    pharmacist32: 'Nilesha Patel.png',
    pharmacist33: 'Ola Onibon.png',
    pharmacist34: 'Oye Owen.png',
    pharmacist35: 'Peju Vaughan.png',
    pharmacist36: 'Renata Lavrador.png',
    pharmacist37: 'Rumbi Mushaikwa.png',
    pharmacist38: 'Sally Read.png',
    pharmacist39: 'Sally-anne Bowen.png',
    pharmacist40: 'Saman Saeed.png',
    pharmacist41: 'Samia Choudhary.png',
    pharmacist42: 'Sanah Ajmal.png',
    pharmacist43: 'Sando Golley.png',
    pharmacist44: 'Selwyn John.png',
    pharmacist45: 'Shane spaans.png',
    pharmacist46: 'Shima Jadiv.png',
    pharmacist47: 'Shirley Bickers.png',
    pharmacist48: 'Tina Zaki.png',
    pharmacist49: 'Tomasz Wojcik.png',
    pharmacist50: 'Vikki Hartland.png',
    pharmacist51: 'Yogesh Patel.png',
    pharmacist52: 'Zara Khan.png',
    pharmacist53: 'Jitendra Sheth.png',
    pharmacist54: 'Aws Radef.png',
    pharmacist55: 'Nneka Ozouli.png',
    pharmacist56: 'Roaa Mohammed.png',
    pharmacist57: 'Helen Lyon.png',
    pharmacist58: 'Piotr Boguta.png',
    pharmacist59: 'Linda Dang.png',
    pharmacist60: 'Karan Daffu.png',
    
    
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
        
        if (certificateTemplate === 'certificate4') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-attention');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-attention');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-attention');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-attention');
        }
        
        if (certificateTemplate === 'certificate5') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-cannabis');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-cannabis');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-cannabis');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-cannabis');
        }
        
        if (certificateTemplate === 'certificate6') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-clozapine');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-clozapine');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-clozapine');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-clozapine');
        }
        
        if (certificateTemplate === 'certificate7') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-controlled-drugs-destruction');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-controlled-drugs-destruction');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-controlled-drugs-destruction');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-controlled-drugs-destruction');
        }
        
        if (certificateTemplate === 'certificate8') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-controlled-drugs-prisons');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-controlled-drugs-prisons');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-controlled-drugs-prisons');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-controlled-drugs-prisons');
        }
        
        if (certificateTemplate === 'certificate9') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-controlled-drugs');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-controlled-drugs');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-controlled-drugs');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-controlled-drugs');
        }
        
        if (certificateTemplate === 'certificate10') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-cyber-security');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-cyber-security');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-cyber-security');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-cyber-security');
        }
        
        if (certificateTemplate === 'certificate11') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-diabetes-mental-health');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-diabetes-mental-health');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-diabetes-mental-health');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-diabetes-mental-health');
        }
        
        if (certificateTemplate === 'certificate12') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-drug-interaction');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-drug-interaction');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-drug-interaction');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-drug-interaction');
        }

        if (certificateTemplate === 'certificate13') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-eworks');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-eworks');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-eworks');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-eworks');
        }
        
        
        if (certificateTemplate === 'certificate14') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-end-of-life-parkinsons');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-end-of-life-parkinsons');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-end-of-life-parkinsons');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-end-of-life-parkinsons');
        }
        
        if (certificateTemplate === 'certificate15') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-epilepsy-mental-health');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-epilepsy-mental-health');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-epilepsy-mental-health');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-epilepsy-mental-health');
        }
        
        
        if (certificateTemplate === 'certificate17') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-gdpr');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-gdpr');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-gdpr');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-gdpr');
        }
        
        if (certificateTemplate === 'certificate18') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-good-distribution-practice');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-good-distribution-practice');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-good-distribution-practice');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-good-distribution-practice');
        }
        
        if (certificateTemplate === 'certificate19') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-hca-medicines-administration');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-hca-medicines-administration');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-hca-medicines-administration');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-hca-medicines-administration');
        }
        
        if (certificateTemplate === 'certificate20') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-high-dose-antipsychotic');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-high-dose-antipsychotic');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-high-dose-antipsychotic');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-high-dose-antipsychotic');
        }
        
        if (certificateTemplate === 'certificate21') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-induction-to-ashtons');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-induction-to-ashtons');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-induction-to-ashtons');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-induction-to-ashtons');
        }
        
        if (certificateTemplate === 'certificate22') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-introduction-to-medication');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-introduction-to-medication');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-introduction-to-medication');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-introduction-to-medication');
        }
        
        if (certificateTemplate === 'certificate23') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-long-acting-antipsychotic');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-long-acting-antipsychotic');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-long-acting-antipsychotic');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-long-acting-antipsychotic');
        }
        
        if (certificateTemplate === 'certificate24') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-management-diabetes-end-of-life');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-management-diabetes-end-of-life');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-management-diabetes-end-of-life');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-management-diabetes-end-of-life');
        }
        
        if (certificateTemplate === 'certificate25') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-managing-oral-problems-palliative-care');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-managing-oral-problems-palliative-care');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-managing-oral-problems-palliative-care');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-managing-oral-problems-palliative-care');
        }
        
        if (certificateTemplate === 'certificate26') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-medicine-management');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-medicine-management');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-medicine-management');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-medicine-management');
        }
        
        if (certificateTemplate === 'certificate27') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-medicines-mental-health-act');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-medicines-mental-health-act');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-medicines-mental-health-act');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-medicines-mental-health-act');
        }
        
        if (certificateTemplate === 'certificate28') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-patient-group-directions');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-patient-group-directions');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-patient-group-directions');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-patient-group-directions');
        }
        
        if (certificateTemplate === 'certificate29') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-pharmacist-recognition-award');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-pharmacist-recognition-award');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-pharmacist-recognition-award');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-pharmacist-recognition-award');
        }
        
        if (certificateTemplate === 'certificate30') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-pharmacological-interventions-detoxification');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-pharmacological-interventions-detoxification');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-pharmacological-interventions-detoxification');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-pharmacological-interventions-detoxification');
        }
        
        if (certificateTemplate === 'certificate31') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-pharmacy-induction');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-pharmacy-induction');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-pharmacy-induction');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-pharmacy-induction');
        }
        
        if (certificateTemplate === 'certificate32') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-rapid-tranquillisation');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-rapid-tranquillisation');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-rapid-tranquillisation');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-rapid-tranquillisation');
        }
        
        if (certificateTemplate === 'certificate33') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-safer-medicines-administration');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-safer-medicines-administration');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-safer-medicines-administration');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-safer-medicines-administration');
        }
        
        if (certificateTemplate === 'certificate34') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-secondary-signatory-management-cds-dlms');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-secondary-signatory-management-cds-dlms');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-secondary-signatory-management-cds-dlms');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-secondary-signatory-management-cds-dlms');
        }
        
        if (certificateTemplate === 'certificate35') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-sleep-disorders');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-sleep-disorders');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-sleep-disorders');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-sleep-disorders');
        }
        
        if (certificateTemplate === 'certificate36') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-smoking-cessation-mental-health');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-smoking-cessation-mental-health');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-smoking-cessation-mental-health');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-smoking-cessation-mental-health');
        }
        
        if (certificateTemplate === 'certificate37') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-accountable-officer');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-accountable-officer');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-accountable-officer');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-accountable-officer');
        }
        
        if (certificateTemplate === 'certificate38') {
            certificateHTML = certificateHTML.replace('class="name', 'class="name-tto-dispensing-nurses');
            certificateHTML = certificateHTML.replace('class="date1', 'class="date1-tto-dispensing-nurses');
            certificateHTML = certificateHTML.replace('class="date2', 'class="date2-tto-dispensing-nurses');
            certificateHTML = certificateHTML.replace('class="signature1', 'class="signature1-tto-dispensing-nurses');
        }
        
        


        certificateContainer.innerHTML += certificateHTML;
    });

    
}

function downloadCertificate(certificateId) {
    const certificate = document.getElementById(certificateId);
    const htmlContent = certificate.innerHTML;

    // Retrieve selected options and name input value
    const certificateTemplate = document.getElementById("certificate").selectedOptions[0].text;
    const pharmacist = document.getElementById("pharmacist").value;
    const names = document.getElementById("names").value.split(",").map(name => name.trim());
    console.log(names); // Log the names array to debug

    const rawDate = new Date(document.getElementById("date").value); // Convert input date to Date object
    const formattedDate = formatDate(rawDate); // Format date using custom function

     // Get the index of the certificate being processed
    const certificateIndex = parseInt(certificateId.split('_')[1]) - 1; // Extract index from certificateId

    // Construct filename based on selected options, input value, and formatted date
    const filename = `${names[certificateIndex]} ${certificateTemplate} ${formattedDate}.pdf`;

    const pdfOptions = {
        filename: filename, // Use the constructed filename
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

// Function to format date
function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    // Add suffix to day (e.g., "13th")
    const day = date.getDate();
    const suffix = getDaySuffix(day);
    const formattedDay = day + suffix;

    return formattedDate.replace(/\b\d{1,2}\b/, formattedDay);
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

