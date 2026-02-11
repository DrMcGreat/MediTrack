const langSelect = document.getElementById('langSelect');
const welcomeView = document.getElementById('welcomeView');
const modulesView = document.getElementById('modulesView');
const moduleBillingView = document.getElementById('moduleBillingView');
const serviceSelectionView = document.getElementById('serviceSelectionView');
const appointmentsView = document.getElementById('appointmentsView');
const inventoryView = document.getElementById('inventoryView');
const analyticsView = document.getElementById('analyticsView');
const serviceCatalogView = document.getElementById('serviceCatalogView');
const insurancePartnersView = document.getElementById('insurancePartnersView');
const staffSelectView = document.getElementById('staffSelectView');
const staffAccessView = document.getElementById('staffAccessView');
const staffAccessGrid = document.getElementById('staffAccessGrid');
const roleDashboardView = document.getElementById('roleDashboardView');
const facilityProfileView = document.getElementById('facilityProfileView');
const topBar = document.getElementById('topBar');
const facilityName = document.getElementById('facilityName');

const tabSignIn = document.getElementById('tabSignIn');
const tabSignUp = document.getElementById('tabSignUp');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signInMessage = document.getElementById('signInMessage');
const signUpMessage = document.getElementById('signUpMessage');
const signOutBtn = document.getElementById('signOutBtn');
const homeBtn = document.getElementById('homeBtn');

const signInCode = document.getElementById('signInCode');
const signUpFacility = document.getElementById('signUpFacility');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPhone = document.getElementById('signUpPhone');
const signUpCity = document.getElementById('signUpCity');
const signUpCountry = document.getElementById('signUpCountry');
const signUpCode = document.getElementById('signUpCode');
const signUpLogo = document.getElementById('signUpLogo');

const moduleButtons = document.querySelectorAll('[data-module]');
const backToModules = document.getElementById('backToModules');
const backToWelcome = document.getElementById('backToWelcome');
const backToWelcomeFromStaff = document.getElementById('backToWelcomeFromStaff');
const chooseAdminBtn = document.getElementById('chooseAdminBtn');
const chooseEmployeeBtn = document.getElementById('chooseEmployeeBtn');
const staffAdminCard = document.getElementById('staffAdminCard');
const staffEmployeeCard = document.getElementById('staffEmployeeCard');
const goToModules = document.getElementById('goToModules');
const backToModulesFromDashboard = document.getElementById('backToModulesFromDashboard');
const backToModulesFromAppointments = document.getElementById('backToModulesFromAppointments');
const backToModulesFromInventory = document.getElementById('backToModulesFromInventory');
const backToModulesFromAnalytics = document.getElementById('backToModulesFromAnalytics');
const backToModulesFromServiceCatalog = document.getElementById('backToModulesFromServiceCatalog');
const backToModulesFromInsurance = document.getElementById('backToModulesFromInsurance');
const backToModulesFromFacility = document.getElementById('backToModulesFromFacility');
const billingTableBody = document.getElementById('billingTableBody');
const addBillingRow = document.getElementById('addBillingRow');
const insuranceProvider = document.getElementById('insuranceProvider');
const insuranceId = document.getElementById('insuranceId');
const patientIdentifier = document.getElementById('patientIdentifier');
const coverageRate = document.getElementById('coverageRate');
const pricingProvider = document.getElementById('pricingProvider');
const pricingCode = document.getElementById('pricingCode');
const pricingLabel = document.getElementById('pricingLabel');
const pricingPrice = document.getElementById('pricingPrice');
const pricingBase = document.getElementById('pricingBase');
const addPricingRule = document.getElementById('addPricingRule');
const pricingTableBody = document.getElementById('pricingTableBody');
const pricingMessage = document.getElementById('pricingMessage');
const billingTotal = document.getElementById('billingTotal');
const insuranceShare = document.getElementById('insuranceShare');
const patientShare = document.getElementById('patientShare');
const employeeRoleBadge = document.getElementById('employeeRoleBadge');
const receiptPanel = document.getElementById('receiptPanel');
const generateReceiptBtn = document.getElementById('generateReceiptBtn');
const printReceiptBtn = document.getElementById('printReceiptBtn');
const receiptFacility = document.getElementById('receiptFacility');
const receiptNumber = document.getElementById('receiptNumber');
const receiptCashier = document.getElementById('receiptCashier');
const receiptDate = document.getElementById('receiptDate');
const receiptTime = document.getElementById('receiptTime');
const receiptClientCode = document.getElementById('receiptClientCode');
const receiptLastName = document.getElementById('receiptLastName');
const receiptFirstName = document.getElementById('receiptFirstName');
const receiptAddress = document.getElementById('receiptAddress');
const receiptInsurer = document.getElementById('receiptInsurer');
const receiptSex = document.getElementById('receiptSex');
const receiptDob = document.getElementById('receiptDob');
const receiptProfession = document.getElementById('receiptProfession');
const receiptPhone = document.getElementById('receiptPhone');
const receiptCoverage = document.getElementById('receiptCoverage');
const receiptPolicy = document.getElementById('receiptPolicy');
const receiptTableBody = document.getElementById('receiptTableBody');
const receiptTotalNet = document.getElementById('receiptTotalNet');
const receiptTotalInsurance = document.getElementById('receiptTotalInsurance');
const facilityLogoImg = document.getElementById('facilityLogoImg');
const receiptLogoImg = document.getElementById('receiptLogoImg');
const serviceCatalogForm = document.getElementById('serviceCatalogForm');
const serviceCatalogName = document.getElementById('serviceCatalogName');
const serviceCatalogCategory = document.getElementById('serviceCatalogCategory');
const serviceCatalogDiseaseCode = document.getElementById('serviceCatalogDiseaseCode');
const serviceCatalogUninsuredPrice = document.getElementById('serviceCatalogUninsuredPrice');
const serviceCatalogMessage = document.getElementById('serviceCatalogMessage');
const serviceCatalogTable = document.getElementById('serviceCatalogTable');
const serviceCatalogEmpty = document.getElementById('serviceCatalogEmpty');
const serviceInsurancePartner = document.getElementById('serviceInsurancePartner');
const serviceInsuranceCode = document.getElementById('serviceInsuranceCode');
const serviceInsurancePrice = document.getElementById('serviceInsurancePrice');
const serviceInsuranceBase = document.getElementById('serviceInsuranceBase');
const addServiceInsurance = document.getElementById('addServiceInsurance');
const serviceInsuranceTable = document.getElementById('serviceInsuranceTable');
const serviceInsuranceEmpty = document.getElementById('serviceInsuranceEmpty');
const insuranceForm = document.getElementById('insuranceForm');
const insuranceName = document.getElementById('insuranceName');
const insuranceCode = document.getElementById('insuranceCode');
const insuranceEmail = document.getElementById('insuranceEmail');
const insurancePhone = document.getElementById('insurancePhone');
const insuranceCoverage = document.getElementById('insuranceCoverage');
const insurancePolicy = document.getElementById('insurancePolicy');
const insuranceNotes = document.getElementById('insuranceNotes');
const insuranceMessage = document.getElementById('insuranceMessage');
const insuranceTable = document.getElementById('insuranceTable');
const insuranceEmpty = document.getElementById('insuranceEmpty');
const facilityProfileForm = document.getElementById('facilityProfileForm');
const facilityProfileName = document.getElementById('facilityProfileName');
const facilityProfileCode = document.getElementById('facilityProfileCode');
const facilityProfileEmail = document.getElementById('facilityProfileEmail');
const facilityProfilePhone = document.getElementById('facilityProfilePhone');
const facilityProfileCity = document.getElementById('facilityProfileCity');
const facilityProfileCountry = document.getElementById('facilityProfileCountry');
const facilityProfileAddress = document.getElementById('facilityProfileAddress');
const facilityProfileLogo = document.getElementById('facilityProfileLogo');
const facilityLogoPreview = document.getElementById('facilityLogoPreview');
const facilityProfileMessage = document.getElementById('facilityProfileMessage');

const patientFullName = document.getElementById('patientFullName');
const patientSex = document.getElementById('patientSex');
const patientDob = document.getElementById('patientDob');
const patientAge = document.getElementById('patientAge');
const patientAddress = document.getElementById('patientAddress');
const patientPhone = document.getElementById('patientPhone');
const patientEmergencyPhone = document.getElementById('patientEmergencyPhone');
const patientWhatsapp = document.getElementById('patientWhatsapp');
const patientProfession = document.getElementById('patientProfession');
const patientEducation = document.getElementById('patientEducation');
const assignDoctor = document.getElementById('assignDoctor');
const consultationCost = document.getElementById('consultationCost');
const addConsultationBtn = document.getElementById('addConsultationBtn');
const savePatientBtn = document.getElementById('savePatientBtn');
const provideServicesBtn = document.getElementById('provideServicesBtn');
const patientMessage = document.getElementById('patientMessage');
const patientSearch = document.getElementById('patientSearch');

const backToBillingFromServices = document.getElementById('backToBillingFromServices');
const addSelectedServices = document.getElementById('addSelectedServices');
const clearServiceSelection = document.getElementById('clearServiceSelection');
const serviceSelectionMessage = document.getElementById('serviceSelectionMessage');
const serviceSelects = document.querySelectorAll('[data-service-category]');
const medicationChecks = document.querySelectorAll('.med-check');

const appointmentPatient = document.getElementById('appointmentPatient');
const appointmentPhone = document.getElementById('appointmentPhone');
const appointmentDoctor = document.getElementById('appointmentDoctor');
const appointmentService = document.getElementById('appointmentService');
const appointmentDate = document.getElementById('appointmentDate');
const appointmentTime = document.getElementById('appointmentTime');
const appointmentNotes = document.getElementById('appointmentNotes');
const createAppointmentBtn = document.getElementById('createAppointmentBtn');
const appointmentsTableBody = document.getElementById('appointmentsTableBody');
const appointmentsMessage = document.getElementById('appointmentsMessage');
const appointmentsPortalLink = document.getElementById('appointmentsPortalLink');
const copyPortalLink = document.getElementById('copyPortalLink');

const stockName = document.getElementById('stockName');
const stockPrice = document.getElementById('stockPrice');
const stockQty = document.getElementById('stockQty');
const stockMin = document.getElementById('stockMin');
const stockEntryDate = document.getElementById('stockEntryDate');
const stockExpiryDate = document.getElementById('stockExpiryDate');
const stockReceipt = document.getElementById('stockReceipt');
const addStockBtn = document.getElementById('addStockBtn');
const stockTableBody = document.getElementById('stockTableBody');
const inventoryMessage = document.getElementById('inventoryMessage');
const poSupplier = document.getElementById('poSupplier');
const poItem = document.getElementById('poItem');
const poQty = document.getElementById('poQty');
const poDate = document.getElementById('poDate');
const addPurchaseOrderBtn = document.getElementById('addPurchaseOrderBtn');
const poTableBody = document.getElementById('poTableBody');
const poMessage = document.getElementById('poMessage');

const reportConsultations = document.getElementById('reportConsultations');
const reportLab = document.getElementById('reportLab');
const reportImaging = document.getElementById('reportImaging');
const reportHospital = document.getElementById('reportHospital');
const reportSurgery = document.getElementById('reportSurgery');
const reportOutpatient = document.getElementById('reportOutpatient');
const reportPharmacy = document.getElementById('reportPharmacy');
const trendTableBody = document.getElementById('trendTableBody');
const payslipTableBody = document.getElementById('payslipTableBody');

const dashboardRoleLabel = document.getElementById('dashboardRoleLabel');
const admTotalPatients = document.getElementById('admTotalPatients');
const admVisitsToday = document.getElementById('admVisitsToday');
const admVisitsWeek = document.getElementById('admVisitsWeek');
const admVisitsMonth = document.getElementById('admVisitsMonth');
const admPaidPatients = document.getElementById('admPaidPatients');
const admPaidInsurance = document.getElementById('admPaidInsurance');
const admStaffTable = document.getElementById('admStaffTable');

const docPatientsCount = document.getElementById('docPatientsCount');
const docUpcoming = document.getElementById('docUpcoming');
const docCompleted = document.getElementById('docCompleted');
const docRemuneration = document.getElementById('docRemuneration');
const docPatientList = document.getElementById('docPatientList');
const docGross = document.getElementById('docGross');
const docOtr = document.getElementById('docOtr');
const docNet = document.getElementById('docNet');
const downloadPayslip = document.getElementById('downloadPayslip');

const nursePatients = document.getElementById('nursePatients');
const nurseTasks = document.getElementById('nurseTasks');
const nurseMonthly = document.getElementById('nurseMonthly');
const nurseDoctorPayments = document.getElementById('nurseDoctorPayments');

const labPending = document.getElementById('labPending');
const labInProgress = document.getElementById('labInProgress');
const labCompleted = document.getElementById('labCompleted');

const radioScheduled = document.getElementById('radioScheduled');
const radioCompleted = document.getElementById('radioCompleted');

const pharmacyDispensed = document.getElementById('pharmacyDispensed');
const pharmacyAlerts = document.getElementById('pharmacyAlerts');

const accRevenue = document.getElementById('accRevenue');
const accPatient = document.getElementById('accPatient');
const accInsurance = document.getElementById('accInsurance');
const accOutstanding = document.getElementById('accOutstanding');
const accDoctorPayments = document.getElementById('accDoctorPayments');

const dirPatients = document.getElementById('dirPatients');
const dirServices = document.getElementById('dirServices');
const dirRevenue = document.getElementById('dirRevenue');
const dirStaffProductivity = document.getElementById('dirStaffProductivity');

const adminSignInForm = document.getElementById('adminSignInForm');
const adminId = document.getElementById('adminId');
const adminPassword = document.getElementById('adminPassword');
const adminSignInMessage = document.getElementById('adminSignInMessage');

const employeeSignInForm = document.getElementById('employeeSignInForm');
const employeeId = document.getElementById('employeeId');
const employeePassword = document.getElementById('employeePassword');
const employeeSignInMessage = document.getElementById('employeeSignInMessage');

const staffAdminPanel = document.getElementById('staffAdminPanel');
const staffForm = document.getElementById('staffForm');
const staffName = document.getElementById('staffName');
const staffRole = document.getElementById('staffRole');
const staffEmail = document.getElementById('staffEmail');
const staffPhone = document.getElementById('staffPhone');
const staffCode = document.getElementById('staffCode');
const staffTempPassword = document.getElementById('staffTempPassword');
const staffMessage = document.getElementById('staffMessage');
const staffListBody = document.getElementById('staffListBody');
const doctorFields = document.getElementById('doctorFields');
const staffEmploymentType = document.getElementById('staffEmploymentType');
const staffLocumRate = document.getElementById('staffLocumRate');
const doctorSex = document.getElementById('doctorSex');
const doctorAge = document.getElementById('doctorAge');
const doctorReg = document.getElementById('doctorReg');
const doctorTax = document.getElementById('doctorTax');
const doctorSpecialty = document.getElementById('doctorSpecialty');
const doctorFee = document.getElementById('doctorFee');
const doctorOtr = document.getElementById('doctorOtr');

let currentLang = 'en';
let currentFacility = null;
let currentFacilityProfile = null;
let currentEmployee = null;
let staffAccessMode = null;
let pendingServiceInsurance = [];

const DEFAULT_INSURANCE_PARTNERS = [
  'AMU',
  'INAM',
  'SUNU',
  'SUNU-GB',
  'SANLAM',
  'GTA',
  'GCA',
  'MSH',
  'ASCOMA',
  'OLEA',
  'TRANSVIE',
];

function getFacilitiesKey() {
  return 'meditrack_facilities';
}

function loadFacilities() {
  try {
    const raw = localStorage.getItem(getFacilitiesKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveFacilities(list) {
  try {
    localStorage.setItem(getFacilitiesKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function saveFacilityProfile(profile) {
  if (!profile?.code) return;
  const facilities = loadFacilities();
  const index = facilities.findIndex((item) => item.code === profile.code);
  if (index >= 0) {
    facilities[index] = { ...facilities[index], ...profile };
  } else {
    facilities.push(profile);
  }
  saveFacilities(facilities);
}

function getFacilityProfile(code) {
  if (!code) return null;
  return loadFacilities().find((item) => item.code === code) || null;
}

function applyFacilityBrand() {
  if (facilityName) {
    facilityName.textContent =
      currentFacilityProfile?.name || currentFacility || t('header.facilityDashboard');
  }
  if (facilityLogoImg) {
    if (currentFacilityProfile?.logo) {
      facilityLogoImg.src = currentFacilityProfile.logo;
      facilityLogoImg.classList.remove('hidden');
    } else {
      facilityLogoImg.classList.add('hidden');
      facilityLogoImg.removeAttribute('src');
    }
  }
  if (receiptLogoImg) {
    receiptLogoImg.src = currentFacilityProfile?.logo || 'Logo Meditrack.webp';
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve('');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
}

function populateFacilityProfileForm() {
  if (!facilityProfileForm) return;
  const profile = currentFacilityProfile || {};
  if (facilityProfileName) facilityProfileName.value = profile.name || '';
  if (facilityProfileCode) facilityProfileCode.value = profile.code || currentFacility || '';
  if (facilityProfileEmail) facilityProfileEmail.value = profile.email || '';
  if (facilityProfilePhone) facilityProfilePhone.value = profile.phone || '';
  if (facilityProfileCity) facilityProfileCity.value = profile.city || '';
  if (facilityProfileCountry) facilityProfileCountry.value = profile.country || '';
  if (facilityProfileAddress) facilityProfileAddress.value = profile.address || '';
  if (facilityLogoPreview) {
    if (profile.logo) {
      facilityLogoPreview.src = profile.logo;
      facilityLogoPreview.classList.remove('hidden');
    } else {
      facilityLogoPreview.classList.add('hidden');
      facilityLogoPreview.removeAttribute('src');
    }
  }
  if (facilityProfileLogo) {
    facilityProfileLogo.value = '';
  }
  setMessage(facilityProfileMessage, '');
}

function getPatientsKey() {
  if (currentFacility) {
    return `meditrack_patients_${currentFacility}`;
  }
  return 'meditrack_patients_default';
}

function loadPatients() {
  try {
    const raw = localStorage.getItem(getPatientsKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function savePatients(list) {
  try {
    localStorage.setItem(getPatientsKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function getReceiptsKey() {
  if (currentFacility) {
    return `meditrack_receipts_${currentFacility}`;
  }
  return 'meditrack_receipts_default';
}

function loadReceipts() {
  try {
    const raw = localStorage.getItem(getReceiptsKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveReceipts(list) {
  try {
    localStorage.setItem(getReceiptsKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function getPricingKey() {
  if (currentFacility) {
    return `meditrack_pricing_${currentFacility}`;
  }
  return 'meditrack_pricing_default';
}

function getServiceCatalogKey() {
  if (currentFacility) {
    return `meditrack_services_${currentFacility}`;
  }
  return 'meditrack_services_default';
}

function loadServiceCatalog() {
  try {
    const raw = localStorage.getItem(getServiceCatalogKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveServiceCatalog(list) {
  try {
    localStorage.setItem(getServiceCatalogKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function getInsurancePartnersKey() {
  if (currentFacility) {
    return `meditrack_insurers_${currentFacility}`;
  }
  return 'meditrack_insurers_default';
}

function loadInsurancePartners() {
  try {
    const raw = localStorage.getItem(getInsurancePartnersKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveInsurancePartners(list) {
  try {
    localStorage.setItem(getInsurancePartnersKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function seedInsurancePartnersIfEmpty() {
  const list = loadInsurancePartners();
  if (list.length) return list;
  const seeded = DEFAULT_INSURANCE_PARTNERS.map((name, index) => ({
    id: `ins_seed_${Date.now()}_${index}`,
    name,
    code: name,
    email: '',
    phone: '',
    coverage: '',
    policy: '',
    notes: '',
  }));
  saveInsurancePartners(seeded);
  return seeded;
}

function populateServiceInsuranceOptions() {
  if (!serviceInsurancePartner) return;
  const insurers = seedInsurancePartnersIfEmpty();
  serviceInsurancePartner.innerHTML = '';
  insurers.forEach((partner) => {
    const option = document.createElement('option');
    option.value = partner.name;
    option.textContent = partner.name;
    serviceInsurancePartner.appendChild(option);
  });
}

function renderServiceInsuranceTable() {
  if (!serviceInsuranceTable) return;
  serviceInsuranceTable.innerHTML = '';
  if (!pendingServiceInsurance.length) {
    if (serviceInsuranceEmpty) {
      serviceInsuranceEmpty.textContent = t('serviceCatalog.insuranceEmpty');
    }
    return;
  }
  if (serviceInsuranceEmpty) {
    serviceInsuranceEmpty.textContent = '';
  }
  pendingServiceInsurance.forEach((entry) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${entry.partner}</td>
      <td>${entry.code}</td>
      <td>${formatCfl(entry.price)}</td>
      <td>${formatCfl(entry.base)}</td>
      <td><button class="ghost" type="button" data-insurance-row="${entry.partner}">${t(
        'serviceCatalog.delete'
      )}</button></td>
    `;
    serviceInsuranceTable.appendChild(row);
  });
}

function renderInsurancePartners() {
  if (!insuranceTable) return;
  const list = seedInsurancePartnersIfEmpty();
  insuranceTable.innerHTML = '';
  if (!list.length) {
    if (insuranceEmpty) {
      insuranceEmpty.textContent = t('insurance.empty');
    }
    return;
  }
  if (insuranceEmpty) {
    insuranceEmpty.textContent = '';
  }
  list.forEach((partner) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${partner.name || '-'}</td>
      <td>${partner.code || '-'}</td>
      <td>${partner.coverage ? `${partner.coverage}%` : '-'}</td>
      <td>${partner.email || partner.phone || '-'}</td>
      <td><button class="ghost" type="button" data-insurance-id="${partner.id}">${t(
        'insurance.delete'
      )}</button></td>
    `;
    insuranceTable.appendChild(row);
  });
}

function getServiceCategoryLabel(category) {
  const map = {
    consultation: t('serviceCatalog.catConsultation'),
    lab: t('serviceCatalog.catLab'),
    imaging: t('serviceCatalog.catImaging'),
    hospitalization: t('serviceCatalog.catHospital'),
    surgery: t('serviceCatalog.catSurgery'),
    outpatient: t('serviceCatalog.catOutpatient'),
  };
  return map[category] || category;
}

function renderServiceCatalog() {
  if (!serviceCatalogTable) return;
  const list = loadServiceCatalog();
  serviceCatalogTable.innerHTML = '';
  if (!list.length) {
    if (serviceCatalogEmpty) {
      serviceCatalogEmpty.textContent = t('serviceCatalog.empty');
    }
    return;
  }
  if (serviceCatalogEmpty) {
    serviceCatalogEmpty.textContent = '';
  }
  const sorted = [...list].sort((a, b) => {
    const cat = (a.category || '').localeCompare(b.category || '');
    if (cat !== 0) return cat;
    return (a.name || '').localeCompare(b.name || '');
  });
  sorted.forEach((service) => {
    const insuredCount = Array.isArray(service.insurancePricing)
      ? service.insurancePricing.length
      : 0;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${getServiceCategoryLabel(service.category)}</td>
      <td>${service.name || '-'}</td>
      <td>${service.diseaseCode || '-'}</td>
      <td>${formatCfl(service.uninsuredPrice || 0)}</td>
      <td>${insuredCount ? insuredCount : '-'}</td>
      <td><button class="ghost" type="button" data-service-id="${service.id}">${t(
        'serviceCatalog.delete'
      )}</button></td>
    `;
    serviceCatalogTable.appendChild(row);
  });
}

function loadPricing() {
  try {
    const raw = localStorage.getItem(getPricingKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function savePricing(list) {
  try {
    localStorage.setItem(getPricingKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function getAppointmentsKey() {
  if (currentFacility) {
    return `meditrack_appointments_${currentFacility}`;
  }
  return 'meditrack_appointments_default';
}

function loadAppointments() {
  try {
    const raw = localStorage.getItem(getAppointmentsKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveAppointments(list) {
  try {
    localStorage.setItem(getAppointmentsKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function getStockKey() {
  if (currentFacility) {
    return `meditrack_stock_${currentFacility}`;
  }
  return 'meditrack_stock_default';
}

function loadStock() {
  try {
    const raw = localStorage.getItem(getStockKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveStock(list) {
  try {
    localStorage.setItem(getStockKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function getPurchaseOrdersKey() {
  if (currentFacility) {
    return `meditrack_purchase_orders_${currentFacility}`;
  }
  return 'meditrack_purchase_orders_default';
}

function loadPurchaseOrders() {
  try {
    const raw = localStorage.getItem(getPurchaseOrdersKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function savePurchaseOrders(list) {
  try {
    localStorage.setItem(getPurchaseOrdersKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function fillPatientForm(record) {
  if (!record) return;
  if (patientFullName) patientFullName.value = record.name || '';
  if (patientSex) patientSex.value = record.sex || '';
  if (patientDob) patientDob.value = record.dob || '';
  if (patientAge) patientAge.value = record.age || '';
  if (patientAddress) patientAddress.value = record.address || '';
  if (patientPhone) patientPhone.value = record.phone || '';
  if (patientEmergencyPhone) patientEmergencyPhone.value = record.emergency || '';
  if (patientWhatsapp) patientWhatsapp.value = record.whatsapp || '';
  if (patientProfession) patientProfession.value = record.profession || '';
  if (patientEducation) patientEducation.value = record.education || '';
  if (assignDoctor) assignDoctor.value = record.doctor || '';
  if (insuranceProvider) insuranceProvider.value = record.insuranceType || '';
  if (insuranceId) insuranceId.value = record.insuranceId || '';
  if (coverageRate) coverageRate.value = record.coverage || '';
  if (patientIdentifier) patientIdentifier.value = record.identifier || '';
}

function searchPatients(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  const patients = loadPatients();
  return (
    patients.find((patient) => patient.name?.toLowerCase().includes(q)) ||
    patients.find((patient) => patient.phone?.toLowerCase().includes(q)) ||
    patients.find((patient) => patient.whatsapp?.toLowerCase().includes(q)) ||
    patients.find((patient) => patient.identifier?.toLowerCase().includes(q))
  );
}

function normalizeProvider(value) {
  return (value || '').trim().toUpperCase();
}

function normalizeLabel(value) {
  return (value || '').trim().toLowerCase();
}

function findPricingRule(provider, service) {
  if (!provider) return null;
  const rules = loadPricing();
  const code = normalizeLabel(service.code || '');
  const label = normalizeLabel(service.label || '');
  return (
    rules.find(
      (rule) =>
        normalizeProvider(rule.provider) === normalizeProvider(provider) &&
        rule.code &&
        normalizeLabel(rule.code) === code
    ) ||
    rules.find(
      (rule) =>
        normalizeProvider(rule.provider) === normalizeProvider(provider) &&
        rule.label &&
        normalizeLabel(rule.label) === label
    )
  );
}

function renderPricingTable() {
  if (!pricingTableBody) return;
  const rules = loadPricing();
  pricingTableBody.innerHTML = '';
  if (!rules.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="5">${t('billing.pricingEmpty')}</td>`;
    pricingTableBody.appendChild(row);
    return;
  }
  rules.forEach((rule) => {
    const row = document.createElement('tr');
    row.dataset.id = rule.id;
    row.innerHTML = `
      <td>${rule.provider || '-'}</td>
      <td>${rule.label || rule.code || '-'}</td>
      <td>${formatCfl(rule.price || 0)}</td>
      <td>${formatCfl(rule.base || 0)}</td>
      <td><button type="button" class="remove-row" data-id="${rule.id}">${t('billing.remove')}</button></td>
    `;
    pricingTableBody.appendChild(row);
  });
}

function populateAppointmentDoctors() {
  if (!appointmentDoctor) return;
  const employees = loadEmployees();
  const doctors = employees.filter((emp) => emp.role === 'doctor');
  appointmentDoctor.innerHTML = `<option value="">${t('select.placeholder')}</option>`;
  doctors.forEach((doc) => {
    const option = document.createElement('option');
    option.value = doc.code || doc.email || doc.name;
    const specialty = doc.doctorProfile?.specialty ? ` — ${doc.doctorProfile.specialty}` : '';
    option.textContent = `${doc.name || doc.email || doc.code}${specialty}`;
    appointmentDoctor.appendChild(option);
  });
}

function renderAppointmentsTable() {
  if (!appointmentsTableBody) return;
  const appointments = loadAppointments();
  appointmentsTableBody.innerHTML = '';
  if (!appointments.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="7">${t('dashboard.noData')}</td>`;
    appointmentsTableBody.appendChild(row);
    return;
  }
  appointments.forEach((appt) => {
    const row = document.createElement('tr');
    row.dataset.id = appt.id;
    row.innerHTML = `
      <td>${appt.patientName || '-'}</td>
      <td>${appt.doctorName || '-'}</td>
      <td>${appt.serviceLabel || appt.service || '-'}</td>
      <td>${appt.date || '-'}</td>
      <td>${appt.time || '-'}</td>
      <td>
        <select class="appointment-status">
          <option value="scheduled" ${appt.status === 'scheduled' ? 'selected' : ''}>${t('appointments.statusScheduled')}</option>
          <option value="completed" ${appt.status === 'completed' ? 'selected' : ''}>${t('appointments.statusCompleted')}</option>
          <option value="cancelled" ${appt.status === 'cancelled' ? 'selected' : ''}>${t('appointments.statusCancelled')}</option>
        </select>
      </td>
      <td><button type="button" class="remove-row" data-id="${appt.id}">${t('billing.remove')}</button></td>
    `;
    appointmentsTableBody.appendChild(row);
  });
}

function renderStockTable() {
  if (!stockTableBody) return;
  const stock = loadStock();
  stockTableBody.innerHTML = '';
  if (!stock.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="9">${t('dashboard.noData')}</td>`;
    stockTableBody.appendChild(row);
    return;
  }
  const now = new Date();
  stock.forEach((item) => {
    const qty = parseNumber(item.qty);
    const min = parseNumber(item.min);
    const expiry = item.expiryDate ? new Date(item.expiryDate) : null;
    let status = t('inventory.statusOk');
    if (expiry && expiry < now) status = t('inventory.statusExpired');
    else if (min && qty <= min) status = t('inventory.statusLow');
    const row = document.createElement('tr');
    row.dataset.id = item.id;
    row.innerHTML = `
      <td>${item.name || '-'}</td>
      <td><input class="stock-qty" type="number" min="0" step="1" value="${qty}" /></td>
      <td><input class="stock-min" type="number" min="0" step="1" value="${min}" /></td>
      <td><input class="stock-price" type="number" min="0" step="1" value="${parseNumber(item.unitPrice)}" /></td>
      <td>${item.entryDate || '-'}</td>
      <td>${item.expiryDate || '-'}</td>
      <td>${item.receiptName || '-'}</td>
      <td>${status}</td>
      <td>
        <button type="button" class="stock-save ghost" data-id="${item.id}">${t('inventory.update')}</button>
        <button type="button" class="remove-row" data-id="${item.id}">${t('inventory.remove')}</button>
      </td>
    `;
    stockTableBody.appendChild(row);
  });
  updateStockAlerts();
}

function renderPurchaseOrders() {
  if (!poTableBody) return;
  const orders = loadPurchaseOrders();
  poTableBody.innerHTML = '';
  if (!orders.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="6">${t('dashboard.noData')}</td>`;
    poTableBody.appendChild(row);
    return;
  }
  orders.forEach((order) => {
    const row = document.createElement('tr');
    row.dataset.id = order.id;
    row.innerHTML = `
      <td>${order.supplier || '-'}</td>
      <td>${order.item || '-'}</td>
      <td>${order.qty || '-'}</td>
      <td>${order.date || '-'}</td>
      <td>
        <select class="po-status">
          <option value="open" ${order.status === 'open' ? 'selected' : ''}>${t(
            'inventory.statusOpen'
          )}</option>
          <option value="received" ${order.status === 'received' ? 'selected' : ''}>${t(
            'inventory.statusReceived'
          )}</option>
        </select>
      </td>
      <td><button type="button" class="remove-row" data-id="${order.id}">${t('inventory.remove')}</button></td>
    `;
    poTableBody.appendChild(row);
  });
}

function updateStockAlerts() {
  const stock = loadStock();
  const now = new Date();
  const alerts = stock.filter((item) => {
    const qty = parseNumber(item.qty);
    const min = parseNumber(item.min);
    const expiry = item.expiryDate ? new Date(item.expiryDate) : null;
    return (min && qty <= min) || (expiry && expiry < now);
  });
  if (pharmacyAlerts) pharmacyAlerts.textContent = alerts.length.toString();
}

function applyStockDeductions(items) {
  if (!items?.length) return;
  const stock = loadStock();
  let updated = false;
  items.forEach((item) => {
    if (item.category !== 'pharmacy') return;
    const match = stock.find(
      (entry) => normalizeLabel(entry.name) === normalizeLabel(item.label)
    );
    if (!match) return;
    const qty = parseNumber(match.qty);
    match.qty = Math.max(0, qty - (item.qty || 0));
    updated = true;
  });
  if (updated) {
    saveStock(stock);
    renderStockTable();
  }
}

function getServiceCounts(receipts) {
  const counts = {
    consultation: 0,
    lab: 0,
    imaging: 0,
    hospital: 0,
    surgery: 0,
    outpatient: 0,
    pharmacy: 0,
  };
  receipts.forEach((rec) => {
    (rec.items || []).forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category] += 1;
      }
    });
  });
  return counts;
}

function calculateDoctorPayslip(doctor) {
  const receipts = loadReceipts();
  const docKey = doctor.code || doctor.email || doctor.name;
  const doctorReceipts = receipts.filter(
    (rec) => rec.doctor === docKey || rec.doctorName === doctor.name
  );
  const serviceCount = doctorReceipts.reduce((sum, rec) => sum + (rec.items || []).length, 0);
  const serviceFee = parseNumber(doctor.doctorProfile?.serviceFee);
  const otrRate = parseNumber(doctor.doctorProfile?.otrRate);
  const totalReceipts = doctorReceipts.reduce((sum, rec) => sum + (rec.total || 0), 0);
  let gross = 0;
  if (doctor.payType === 'locum' && doctor.payRate) {
    gross = totalReceipts * (doctor.payRate / 100);
  } else if (serviceFee) {
    gross = serviceCount * serviceFee;
  }
  const otr = otrRate ? gross * (otrRate / 100) : 0;
  const net = Math.max(0, gross - otr);
  return { gross, otr, net, serviceCount };
}

function renderReports() {
  const receipts = loadReceipts();
  const counts = getServiceCounts(receipts);
  if (reportConsultations) reportConsultations.textContent = counts.consultation.toString();
  if (reportLab) reportLab.textContent = counts.lab.toString();
  if (reportImaging) reportImaging.textContent = counts.imaging.toString();
  if (reportHospital) reportHospital.textContent = counts.hospital.toString();
  if (reportSurgery) reportSurgery.textContent = counts.surgery.toString();
  if (reportOutpatient) reportOutpatient.textContent = counts.outpatient.toString();
  if (reportPharmacy) reportPharmacy.textContent = counts.pharmacy.toString();

  if (trendTableBody) {
    trendTableBody.innerHTML = '';
    const today = new Date();
    for (let i = 6; i >= 0; i -= 1) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      const dayLabel = day.toLocaleDateString();
      const dayCount = receipts.reduce((sum, rec) => {
        const recDate = new Date(rec.createdAt || '').toLocaleDateString();
        if (recDate === dayLabel) {
          return sum + (rec.items || []).length;
        }
        return sum;
      }, 0);
      const row = document.createElement('tr');
      row.innerHTML = `<td>${dayLabel}</td><td>${dayCount}</td>`;
      trendTableBody.appendChild(row);
    }
  }

  if (payslipTableBody) {
    const doctors = loadEmployees().filter((emp) => emp.role === 'doctor');
    payslipTableBody.innerHTML = '';
    if (!doctors.length) {
      const row = document.createElement('tr');
      row.innerHTML = `<td colspan="5">${t('dashboard.noData')}</td>`;
      payslipTableBody.appendChild(row);
    } else {
      doctors.forEach((doc) => {
        const payslip = calculateDoctorPayslip(doc);
        const row = document.createElement('tr');
        row.dataset.id = doc.code || doc.email || doc.name;
        row.innerHTML = `
          <td>${doc.name || '-'}</td>
          <td>${formatCfl(payslip.gross)}</td>
          <td>${formatCfl(payslip.otr)}</td>
          <td>${formatCfl(payslip.net)}</td>
          <td><button type="button" class="ghost payslip-download" data-id="${row.dataset.id}">${t(
            'reports.download'
          )}</button></td>
        `;
        payslipTableBody.appendChild(row);
      });
    }
  }
}

const translations = {
  en: {
    language: { label: 'Language' },
    header: { facilityDashboard: 'Facility Dashboard' },
    select: { placeholder: 'Select...' },
    hero: {
      title: 'Integrated healthcare facility management',
      subtitle:
        'A secure platform to manage clinical, administrative, and operational workflows in one place.',
      bullet1: 'Patient registration, appointments, and clinical services',
      bullet2: 'Billing, insurance, and real-time reporting',
      bullet3: 'HR, inventory, procurement, and audit trails',
    },
    auth: {
      signIn: 'Sign in',
      signUp: 'Sign up',
      facilityCode: 'Facility identification code',
      facilityCodePlaceholder: 'e.g., CFL-001',
      password: 'Password',
      continue: 'Continue',
      facilityName: 'Facility name',
      facilityNamePlaceholder: 'e.g., Clinique CFL',
      facilityEmail: 'Facility email',
      facilityEmailPlaceholder: 'name@facility.tg',
      facilityPhone: 'Facility phone',
      facilityPhonePlaceholder: '+228...',
      facilityLogo: 'Facility logo (optional)',
      facilityCity: 'City',
      facilityCountry: 'Country',
      authCode: 'Authorization code',
      authCodePlaceholder: 'Provided by admin',
      create: 'Create facility account',
    },
    actions: { signOut: 'Sign out', home: 'Home' },
    modules: {
      title: 'Facility Modules',
      subtitle: 'Choose a module to continue. Access rights are based on your role.',
      billing: 'Billing & Payments',
      billingDesc: 'Patient admission, insurance validation, and payment processing.',
      dashboard: 'Role Dashboard',
      dashboardDesc: 'Personalized indicators for your role.',
      patients: 'Patient Management',
      patientsDesc: 'Registration, profiles, and care pathways.',
      appointments: 'Appointments',
      appointmentsDesc: 'Scheduling, reminders, and visit tracking.',
      records: 'Clinical Records',
      recordsDesc: 'Secure EHR, diagnoses, and treatment history.',
      hr: 'HR & Payroll',
      hrDesc: 'Staff profiles, shifts, and payroll export.',
      inventory: 'Inventory & Stock',
      inventoryDesc: 'Medicines, alerts, and procurement requests.',
      procurement: 'Procurement',
      procurementDesc: 'Suppliers, purchase orders, and approvals.',
      analytics: 'Dashboards & Reports',
      analyticsDesc: 'KPIs, audit trails, and operational insights.',
      staff: 'Staff & Roles',
      staffDesc: 'Create employee profiles and assign access.',
      lab: 'Laboratory',
      labDesc: 'Lab orders, samples, and results tracking.',
      serviceCatalog: 'Service Catalog',
      serviceCatalogDesc: 'Define services and prices by category.',
      facilityProfile: 'Facility Profile',
      facilityProfileDesc: 'Edit hospital details, branding, and contact information.',
      insurancePartners: 'Insurance Partners',
      insurancePartnersDesc: 'Manage partner insurers, contacts, and coverage settings.',
      open: 'Open module',
      back: 'Back to modules',
      backWelcome: 'Back',
    },
    facilityProfile: {
      title: 'Facility profile',
      subtitle: 'Update the hospital name, branding, and contact details.',
      name: 'Facility name',
      code: 'Facility code',
      email: 'Facility email',
      phone: 'Facility phone',
      city: 'City',
      country: 'Country',
      address: 'Address',
      logo: 'Facility logo',
      save: 'Save changes',
      saved: 'Facility profile updated.',
    },
    serviceCatalog: {
      title: 'Service catalog',
      subtitle: 'Create services and assign standard prices by category.',
      name: 'Service name',
      category: 'Category',
      diseaseCode: 'Disease code',
      uninsuredPrice: 'Uninsured price (CFL)',
      insuranceTitle: 'Insurance-specific pricing',
      insurancePartner: 'Insurance partner',
      insuranceServiceCode: 'Service code (insurer)',
      insurancePrice: 'Insured price (CFL)',
      insuranceBase: 'Reimbursement base',
      insuranceAdd: 'Add insurance price',
      insuranceEmpty: 'No insurance prices added yet.',
      insuranceRequired: 'Select an insurer and fill code, price, and base.',
      save: 'Save service',
      saved: 'Service saved.',
      required: 'Please enter a name, category, and uninsured price.',
      empty: 'No services yet. Add your first service.',
      delete: 'Remove',
      listCategory: 'Category',
      listService: 'Service',
      listDisease: 'Disease code',
      listUninsured: 'Uninsured price',
      listInsured: 'Insurer rates',
      insuranceListPartner: 'Insurer',
      insuranceListCode: 'Service code',
      insuranceListPrice: 'CFL price',
      insuranceListBase: 'Reimbursement base',
      catConsultation: 'Consultation',
      catLab: 'Laboratory tests',
      catImaging: 'Medical imaging',
      catHospital: 'Hospitalization',
      catSurgery: 'Surgery',
      catOutpatient: 'Outpatient care',
    },
    insurance: {
      title: 'Insurance partners',
      subtitle: 'Create and manage partner insurers that cover patient services.',
      name: 'Insurance name',
      code: 'Insurance code',
      email: 'Email',
      phone: 'Phone',
      coverage: 'Default coverage (%)',
      policy: 'Policy reference',
      notes: 'Notes',
      save: 'Save insurer',
      saved: 'Insurer saved.',
      required: 'Please enter the insurance name.',
      empty: 'No insurance partners yet. Add your first insurer.',
      delete: 'Remove',
      listName: 'Insurer',
      listCode: 'Code',
      listCoverage: 'Coverage',
      listContact: 'Contact',
    },
    dashboard: {
      title: 'Role dashboard',
      subtitle: 'Key indicators based on your responsibilities.',
      roleLabel: 'Role: {role}',
      admissionTitle: 'Admission staff overview',
      totalPatients: 'Total patients received',
      visitsToday: 'Visits today',
      visitsWeek: 'Visits this week',
      visitsMonth: 'Visits this month',
      paidByPatients: 'Paid by patients',
      paidByInsurance: 'To be paid by insurance',
      byStaff: 'Admissions by staff',
      staffName: 'Staff',
      staffCount: 'Patients',
      doctorTitle: 'Doctor overview',
      doctorPatients: 'Patients assigned',
      doctorUpcoming: 'Upcoming consultations',
      doctorCompleted: 'Completed consultations',
      doctorRemuneration: 'Locum remuneration estimate',
      doctorPayslip: 'Payslip preview',
      doctorGross: 'Gross service fee',
      doctorOtr: 'OTR deduction',
      doctorNet: 'Net payment',
      downloadPayslip: 'Download payslip',
      assignedPatients: 'Assigned patients',
      treatmentPlans: 'Diagnoses & treatment plans',
      placeholder: 'Add consultations to see structured clinical plans here.',
      nurseTitle: 'Nursing overview',
      nursePatients: 'Assigned patients',
      nurseTasks: 'Tasks completed today',
      nurseMonthly: 'Monthly activity',
      labTitle: 'Laboratory overview',
      labPending: 'Tests pending',
      labInProgress: 'In progress',
      labCompleted: 'Completed',
      radiologyTitle: 'Imaging overview',
      radioScheduled: 'Exams scheduled',
      radioCompleted: 'Exams completed',
      pharmacyTitle: 'Pharmacy overview',
      pharmacyDispensed: 'Medications dispensed',
      pharmacyAlerts: 'Stock alerts',
      accountTitle: 'Finance overview',
      revenue: 'Total revenue',
      patientShare: 'Patient payments',
      insuranceShare: 'Insurance payments',
      outstanding: 'Outstanding balances',
      adminTitle: 'Management overview',
      totalServices: 'Service utilization',
      staffProductivity: 'Staff productivity',
      doctorPayments: 'Doctor payments (locum)',
      amount: 'Amount',
      noData: 'No data yet.',
      unknownStaff: 'Unknown staff',
      otherTitle: 'General overview',
      otherSubtitle: 'Your dashboard will appear here once your role is configured.',
    },
    staff: {
      selectTitle: 'Who is connecting?',
      selectSubtitle: 'Choose the account type to continue.',
      choiceAdmin: 'Administrator',
      choiceAdminDesc: 'Create employee profiles and manage access rights.',
      choiceEmployee: 'Employee',
      choiceEmployeeDesc: 'Sign in with your employee credentials to access your role.',
      enterAdminChoice: 'Continue as administrator',
      enterEmployeeChoice: 'Continue as employee',
      accessTitle: 'Staff access',
      accessSubtitle:
        'Administrators create employee profiles. Employees sign in to their role-based account.',
      adminSignIn: 'Administrator sign in',
      employeeSignIn: 'Employee sign in',
      adminId: 'Admin ID / Email',
      employeeId: 'Employee ID / Email',
      enterAdmin: 'Enter admin space',
      enterEmployee: 'Enter employee account',
      manageTitle: 'Employee management',
      manageSubtitle: 'Create staff profiles and assign roles.',
      goModules: 'Go to modules',
      fullName: 'Full name',
      role: 'Role',
      roleAdmission: 'Admission / Medical secretary',
      roleDirector: 'Director',
      roleAccountant: 'Accountant',
      roleDoctor: 'Doctor',
      roleLab: 'Laboratory staff',
      roleNurse: 'Nurse',
      roleRadiology: 'Radiology staff',
      rolePharmacy: 'Pharmacy staff',
      roleOther: 'Other',
      employmentType: 'Employment type',
      employmentPermanent: 'Permanent',
      employmentLocum: 'Locum (vacataire)',
      locumRate: 'Locum rate (%)',
      email: 'Email',
      phone: 'Phone',
      employeeCode: 'Employee ID',
      tempPassword: 'Temporary password',
      doctorType: 'Doctor category',
      doctorFull: 'Full time',
      doctorLocum: 'Locum (vacataire)',
      doctorRate: 'Locum rate (%)',
      doctorSex: 'Sex',
      doctorAge: 'Age',
      doctorReg: 'Medical council registration #',
      doctorTax: 'Tax ID (OTR / NIF)',
      doctorSpecialty: 'Specialty',
      doctorFee: 'Negotiated service fee (CFL)',
      doctorOtr: 'OTR tax rate',
      sexFemale: 'Female',
      sexMale: 'Male',
      sexOther: 'Other',
      create: 'Create employee',
      listTitle: 'Staff list',
      listName: 'Name',
      listRole: 'Role',
      listEmail: 'Email',
      listCode: 'Employee ID',
      listEmpty: 'No staff profiles yet.',
      roleBadge: 'Role: {role}',
      roleUnknown: 'Role assigned',
      messages: {
        adminRequired: 'Enter admin credentials to continue.',
        employeeRequired: 'Enter employee credentials.',
        employeeNotFound: 'Employee not found. Check ID or password.',
        created: 'Employee profile created.',
        staffRequired: 'Please complete required staff fields.',
        locumRateRequired: 'Please enter the locum rate percentage.',
      },
    },
    billing: {
      title: 'Billing & Patient Admission',
      subtitle: 'Register patients, validate insurance, and generate billing details.',
      admissionTitle: 'Patient admission',
      newPatient: 'New patient',
      returningPatient: 'Returning patient',
      patientSearch: 'Search patient',
      patientSearchPlaceholder: 'Search by name, ID, or phone',
      fullName: 'Full name',
      sex: 'Sex',
      sexFemale: 'Female',
      sexMale: 'Male',
      sexOther: 'Other',
      dob: 'Date of birth',
      age: 'Age',
      address: 'Address',
      phone: 'Phone number',
      emergencyPhone: 'Emergency contact',
      whatsapp: 'WhatsApp',
      profession: 'Profession',
      profEmployee: 'Salaried employee (public or private)',
      profSelf: 'Self-employed worker (trader, artisan, farmer, fisher, etc.)',
      profCivil: 'Civil servant',
      profStudent: 'Student',
      profRetired: 'Retiree',
      profUnemployed: 'Unemployed',
      profHome: 'Homemaker',
      education: 'Education level',
      educationPrimary: 'Primary',
      educationSecondary: 'Secondary',
      educationTertiary: 'University',
      educationOther: 'Other',
      insuranceTitle: 'Insurance & coverage',
      pricingTitle: 'Insurance pricing table (optional)',
      pricingProvider: 'Insurance provider',
      pricingCode: 'Service code',
      pricingLabel: 'Service name',
      pricingPrice: 'CFL price',
      pricingBase: 'Reimbursement base',
      pricingAdd: 'Save pricing rule',
      pricingEmpty: 'No pricing rules yet.',
      pricingRequired: 'Select provider and service name.',
      pricingSaved: 'Pricing rule saved.',
      insuranceType: 'Insurance type',
      insuranceId: 'Insurance ID / dossier',
      coverageRate: 'Coverage rate',
      patientId: 'Identification number (national ID, insurance card, or medical record)',
      servicesTitle: 'Reason for visit (multiple selections possible)',
      serviceConsult: 'Consultation',
      serviceLab: 'Lab analysis',
      serviceImaging: 'Medical imaging',
      serviceHospital: 'Hospitalization',
      serviceSurgery: 'Surgery',
      serviceOutpatient: 'Outpatient care',
      servicePharmacy: 'Pharmacy',
      hospitalList: 'Hospitalization services',
      surgeryList: 'Surgery services',
      outpatientList: 'Outpatient care',
      consultList: 'Consultation type',
      assignDoctor: 'Assign doctor',
      doctorPlaceholder: 'Select doctor',
      noDoctor: 'No doctors available',
      consultationCost: 'Consultation cost (CFL)',
      addConsultation: 'Add consultation to billing',
      provideServices: 'Provide services',
      savePatient: 'Save patient profile',
      consultationItem: 'Consultation',
      consultationRequired: 'Enter a consultation cost first.',
      consultAdded: 'Consultation added to billing.',
      patientRequired: 'Please complete all required patient fields.',
      patientSaved: 'Patient profile saved.',
      patientLoaded: 'Patient profile loaded.',
      labList: 'Laboratory tests',
      imagingList: 'Imaging services',
      billingTitle: 'Billing items',
      item: 'Service / Medication',
      itemPlaceholder: 'e.g., Consultation',
      code: 'Code',
      inamCode: 'Code INAM',
      codePlaceholder: 'Code',
      inamPlaceholder: 'Code INAM',
      category: 'Category',
      qty: 'Qty',
      unitPrice: 'Unit price (CFL)',
      base: 'Reimbursement base',
      rate: 'Rate',
      total: 'Total',
      insuranceShareShort: 'Insurance',
      patientShareShort: 'Calculated patient',
      actualPatientShare: 'Actual patient share',
      addLine: 'Add line',
      summaryTitle: 'Billing summary',
      totalCfl: 'Total (CFL)',
      insuranceShare: 'Insurance share',
      patientShare: 'Patient share',
      notes: 'Billing notes',
      remove: 'Remove',
    },
    services: {
      title: 'Provide services',
      subtitle: 'Select the services to add to the billing table.',
      back: 'Back to admission',
      selectHint: 'Select one or more services.',
      consultations: 'Consultation (list)',
      labTests: 'Laboratory tests (list)',
      imaging: 'Medical imaging (list)',
      hospitalization: 'Hospitalization (list)',
      surgery: 'Surgery (list)',
      outpatient: 'Outpatient care (list)',
      medications: 'Medications for hospitalization & care',
      medicationName: 'Medication (Commercial / INN)',
      medicationPrice: 'Unit price (CFL)',
      medicationQty: 'Qty',
      addSelected: 'Add selected services',
      clear: 'Clear selection',
      empty: 'Select at least one service or medication.',
      added: 'Services added to billing.',
    },
    appointments: {
      title: 'Appointment scheduling',
      subtitle: 'Create visits, track upcoming appointments, and manage patient booking.',
      createTitle: 'Create appointment',
      patientName: 'Patient name',
      patientPhone: 'Patient phone',
      doctor: 'Doctor',
      service: 'Service',
      date: 'Date',
      time: 'Time',
      notes: 'Notes',
      create: 'Schedule appointment',
      listTitle: 'Upcoming appointments',
      status: 'Status',
      statusScheduled: 'Scheduled',
      statusCompleted: 'Completed',
      statusCancelled: 'Cancelled',
      portalTitle: 'Online booking (patient portal)',
      portalDesc: 'Share a booking link with patients to capture appointment requests online.',
      portalLink: 'Booking link',
      copyLink: 'Copy link',
      required: 'Please complete patient, doctor, date, and time.',
      saved: 'Appointment scheduled.',
      copied: 'Booking link copied.',
    },
    inventory: {
      title: 'Inventory & Stock',
      subtitle: 'Track medications, expiry dates, and low-stock alerts.',
      addTitle: 'Add medication',
      name: 'Medication (Commercial / INN)',
      unitPrice: 'Unit price (CFL)',
      quantity: 'Quantity',
      minLevel: 'Minimum level',
      entryDate: 'Stock entry date',
      expiryDate: 'Expiry date',
      receipt: 'Supplier receipt',
      add: 'Add to stock',
      listTitle: 'Stock list',
      purchaseTitle: 'Purchase orders',
      supplier: 'Supplier',
      orderItem: 'Item',
      orderQty: 'Quantity',
      orderDate: 'Expected date',
      createOrder: 'Create order',
      status: 'Status',
      statusOk: 'OK',
      statusLow: 'Low',
      statusExpired: 'Expired',
      statusOpen: 'Open',
      statusReceived: 'Received',
      update: 'Update',
      remove: 'Remove',
      required: 'Enter medication name.',
      saved: 'Stock item saved.',
      poRequired: 'Complete supplier, item, and quantity.',
      poSaved: 'Purchase order created.',
    },
    reports: {
      title: 'Dashboards & Reports',
      subtitle: 'Monitor service activity and export key operational data.',
      serviceBreakdown: 'Service breakdown',
      consultations: 'Consultations',
      lab: 'Laboratory tests',
      imaging: 'Imaging',
      hospital: 'Hospitalization',
      surgery: 'Surgery',
      outpatient: 'Outpatient',
      pharmacy: 'Pharmacy',
      trendsTitle: 'Trends (last 7 days)',
      trendDay: 'Day',
      trendCount: 'Total services',
      payslipsTitle: 'Doctor payslips',
      doctor: 'Doctor',
      gross: 'Gross',
      otr: 'OTR',
      net: 'Net',
      download: 'Download',
    },
    receipt: {
      generate: 'Generate receipt',
      print: 'Print receipt',
      authorization: 'Authorization No: __________',
      title: 'Payment Receipt No',
      cashier: 'Cashier:',
      date: 'Date:',
      time: 'Time:',
      clientCode: 'Client code:',
      lastName: 'Last name:',
      firstName: 'First name:',
      address: 'Address:',
      insurer: 'Insurer:',
      sex: 'Sex:',
      dob: 'Born on:',
      profession: 'Profession:',
      phone: 'Phone:',
      coverage: 'Coverage:',
      policy: 'Policy No:',
      service: 'Service',
      code: 'Code',
      inam: 'Code INAM',
      qty: 'Qty',
      unitPrice: 'Unit price',
      rate: 'Rate',
      amount: 'Amount',
      insuranceShare: 'Insurance share',
      patientShare: 'Patient share',
      totalNet: 'Total net to pay:',
      totalInsurance: 'Total insurance:',
      proceedNote: 'Receipt generated. Patient can proceed to the consultation.',
    },
    messages: {
      signInRequired: 'Please enter a facility code and password.',
      signUpRequired: 'Please complete the facility registration details.',
    },
  },
  fr: {
    language: { label: 'Langue' },
    header: { facilityDashboard: "Tableau de bord de l'établissement" },
    select: { placeholder: 'Sélectionner...' },
    hero: {
      title: 'Gestion intégrée des établissements de santé',
      subtitle:
        'Une plateforme sécurisée pour gérer les flux cliniques, administratifs et opérationnels.',
      bullet1: 'Enregistrement des patients, rendez-vous et services cliniques',
      bullet2: 'Facturation, assurances et rapports en temps réel',
      bullet3: 'RH, inventaire, achats et pistes d’audit',
    },
    auth: {
      signIn: 'Se connecter',
      signUp: 'Créer un compte',
      facilityCode: "Code d’identification de l’établissement",
      facilityCodePlaceholder: 'ex. CFL-001',
      password: 'Mot de passe',
      continue: 'Continuer',
      facilityName: "Nom de l’établissement",
      facilityNamePlaceholder: 'ex. Clinique CFL',
      facilityEmail: "Email de l’établissement",
      facilityEmailPlaceholder: 'nom@etablissement.tg',
      facilityPhone: "Téléphone de l’établissement",
      facilityPhonePlaceholder: '+228...',
      facilityLogo: "Logo de l’établissement (optionnel)",
      facilityCity: 'Ville',
      facilityCountry: 'Pays',
      authCode: 'Code d’autorisation',
      authCodePlaceholder: 'Fourni par admin',
      create: 'Créer le compte établissement',
    },
    actions: { signOut: 'Se déconnecter', home: 'Accueil' },
    modules: {
      title: 'Modules de l’établissement',
      subtitle: 'Choisissez un module. Les accès dépendent de votre rôle.',
      billing: 'Facturation & Paiements',
      billingDesc: 'Admission, validation assurance et paiements.',
      dashboard: 'Tableau de bord',
      dashboardDesc: 'Indicateurs personnalisés selon le rôle.',
      patients: 'Gestion des patients',
      patientsDesc: 'Enregistrement, profils et parcours de soins.',
      appointments: 'Rendez-vous',
      appointmentsDesc: 'Planification, rappels et suivi des visites.',
      records: 'Dossiers cliniques',
      recordsDesc: 'DME sécurisé, diagnostics et historiques.',
      hr: 'RH & Paie',
      hrDesc: 'Profils, plannings et export paie.',
      inventory: 'Stock & Inventaire',
      inventoryDesc: 'Médicaments, alertes et demandes d’achat.',
      procurement: 'Achats',
      procurementDesc: 'Fournisseurs, bons de commande et validations.',
      analytics: 'Tableaux de bord & Rapports',
      analyticsDesc: 'KPI, audits et analyses opérationnelles.',
      staff: 'Personnel & Rôles',
      staffDesc: 'Créer des profils employés et attribuer les accès.',
      lab: 'Laboratoire',
      labDesc: 'Demandes, échantillons et résultats.',
      serviceCatalog: 'Catalogue des services',
      serviceCatalogDesc: 'Définir les services et leurs tarifs par catégorie.',
      facilityProfile: "Profil de l'établissement",
      facilityProfileDesc: "Modifier les informations, le logo et les contacts.",
      insurancePartners: "Partenaires d'assurance",
      insurancePartnersDesc: "Gérer les assureurs partenaires, contacts et taux.",
      open: 'Ouvrir le module',
      back: 'Retour aux modules',
      backWelcome: 'Retour',
    },
    facilityProfile: {
      title: "Profil de l'établissement",
      subtitle: "Mettre à jour le nom, le logo et les contacts.",
      name: "Nom de l'établissement",
      code: "Code de l'établissement",
      email: "Email de l'établissement",
      phone: "Téléphone de l'établissement",
      city: 'Ville',
      country: 'Pays',
      address: 'Adresse',
      logo: "Logo de l'établissement",
      save: 'Enregistrer les modifications',
      saved: "Le profil de l'établissement a été mis à jour.",
    },
    serviceCatalog: {
      title: 'Catalogue des services',
      subtitle: 'Créer des services et définir les tarifs par catégorie.',
      name: 'Nom du service',
      category: 'Catégorie',
      diseaseCode: 'Code maladie',
      uninsuredPrice: 'Prix non assuré (CFL)',
      insuranceTitle: 'Tarifs spécifiques par assureur',
      insurancePartner: 'Assureur partenaire',
      insuranceServiceCode: 'Code service (assureur)',
      insurancePrice: 'Prix assuré (CFL)',
      insuranceBase: 'Base de remboursement',
      insuranceAdd: "Ajouter un tarif assureur",
      insuranceEmpty: "Aucun tarif assureur pour le moment.",
      insuranceRequired: "Sélectionnez un assureur et renseignez le code, le prix et la base.",
      save: 'Enregistrer le service',
      saved: 'Service enregistré.',
      required: 'Veuillez saisir un nom, une catégorie et un prix non assuré.',
      empty: 'Aucun service pour le moment. Ajoutez-en un.',
      delete: 'Supprimer',
      listCategory: 'Catégorie',
      listService: 'Service',
      listDisease: 'Code maladie',
      listUninsured: 'Prix non assuré',
      listInsured: 'Tarifs assureurs',
      insuranceListPartner: 'Assureur',
      insuranceListCode: 'Code service',
      insuranceListPrice: 'Prix (CFL)',
      insuranceListBase: 'Base de remboursement',
      catConsultation: 'Consultation',
      catLab: 'Analyses de laboratoire',
      catImaging: 'Imagerie médicale',
      catHospital: 'Hospitalisation',
      catSurgery: 'Chirurgie',
      catOutpatient: 'Soins ambulatoires',
    },
    insurance: {
      title: "Partenaires d'assurance",
      subtitle: "Créer et gérer les assureurs partenaires.",
      name: "Nom de l'assureur",
      code: "Code d'assurance",
      email: 'Email',
      phone: 'Téléphone',
      coverage: 'Couverture par défaut (%)',
      policy: 'Référence de police',
      notes: 'Notes',
      save: "Enregistrer l'assureur",
      saved: 'Assureur enregistré.',
      required: "Veuillez saisir le nom de l'assureur.",
      empty: "Aucun assureur pour le moment. Ajoutez-en un.",
      delete: 'Supprimer',
      listName: 'Assureur',
      listCode: 'Code',
      listCoverage: 'Couverture',
      listContact: 'Contact',
    },
    dashboard: {
      title: 'Tableau de bord',
      subtitle: 'Indicateurs clés selon votre rôle.',
      roleLabel: 'Rôle : {role}',
      admissionTitle: "Vue d'ensemble admissions",
      totalPatients: 'Patients reçus',
      visitsToday: "Visites aujourd'hui",
      visitsWeek: 'Visites cette semaine',
      visitsMonth: 'Visites ce mois',
      paidByPatients: 'Payé par les patients',
      paidByInsurance: "À payer par l'assurance",
      byStaff: 'Admissions par agent',
      staffName: 'Agent',
      staffCount: 'Patients',
      doctorTitle: "Vue d'ensemble médecin",
      doctorPatients: 'Patients assignés',
      doctorUpcoming: 'Consultations à venir',
      doctorCompleted: 'Consultations réalisées',
      doctorRemuneration: 'Rémunération vacataire estimée',
      doctorPayslip: 'Aperçu de la fiche de paie',
      doctorGross: 'Honoraires bruts',
      doctorOtr: 'Retenue OTR',
      doctorNet: 'Net à payer',
      downloadPayslip: 'Télécharger la fiche de paie',
      assignedPatients: 'Patients assignés',
      treatmentPlans: 'Diagnostics & plans de traitement',
      placeholder: 'Ajoutez des consultations pour afficher les plans cliniques.',
      nurseTitle: "Vue d'ensemble soins infirmiers",
      nursePatients: 'Patients assignés',
      nurseTasks: 'Tâches réalisées aujourd’hui',
      nurseMonthly: 'Activité mensuelle',
      labTitle: 'Vue d’ensemble laboratoire',
      labPending: 'Tests en attente',
      labInProgress: 'En cours',
      labCompleted: 'Terminés',
      radiologyTitle: "Vue d'ensemble imagerie",
      radioScheduled: 'Examens programmés',
      radioCompleted: 'Examens réalisés',
      pharmacyTitle: "Vue d'ensemble pharmacie",
      pharmacyDispensed: 'Médicaments délivrés',
      pharmacyAlerts: 'Alertes de stock',
      accountTitle: "Vue d'ensemble finances",
      revenue: 'Revenus totaux',
      patientShare: 'Paiements patients',
      insuranceShare: "Paiements assurance",
      outstanding: 'Soldes impayés',
      adminTitle: "Vue d'ensemble direction",
      totalServices: 'Utilisation des services',
      staffProductivity: 'Productivité du personnel',
      doctorPayments: 'Paiements médecins (vacataires)',
      amount: 'Montant',
      noData: 'Aucune donnée.',
      unknownStaff: 'Agent inconnu',
      otherTitle: 'Vue générale',
      otherSubtitle: 'Votre tableau de bord s’affichera une fois le rôle configuré.',
    },
    staff: {
      selectTitle: 'Qui se connecte ?',
      selectSubtitle: 'Choisissez le type de compte pour continuer.',
      choiceAdmin: 'Administrateur',
      choiceAdminDesc: 'Créez des profils employés et gérez les droits d’accès.',
      choiceEmployee: 'Employé',
      choiceEmployeeDesc: 'Connectez-vous avec vos identifiants pour accéder à votre rôle.',
      enterAdminChoice: 'Continuer comme administrateur',
      enterEmployeeChoice: 'Continuer comme employé',
      accessTitle: 'Accès du personnel',
      accessSubtitle:
        "Les administrateurs créent les profils. Les employés se connectent à leur compte.",
      adminSignIn: "Connexion administrateur",
      employeeSignIn: "Connexion employé",
      adminId: "ID admin / Email",
      employeeId: "ID employé / Email",
      enterAdmin: "Entrer dans l'espace admin",
      enterEmployee: "Entrer dans l'espace employé",
      manageTitle: 'Gestion du personnel',
      manageSubtitle: 'Créer des profils et attribuer les rôles.',
      goModules: 'Aller aux modules',
      fullName: 'Nom complet',
      role: 'Rôle',
      roleAdmission: "Admission / Secrétariat médical",
      roleDirector: 'Directeur',
      roleAccountant: 'Comptable',
      roleDoctor: 'Médecin',
      roleLab: 'Laborantin',
      roleNurse: 'Infirmier(ère)',
      roleRadiology: 'Imagerie médicale',
      rolePharmacy: 'Pharmacie',
      roleOther: 'Autre',
      employmentType: "Type d'emploi",
      employmentPermanent: 'Permanent',
      employmentLocum: 'Vacataire',
      locumRate: 'Taux vacataire (%)',
      email: 'Email',
      phone: 'Téléphone',
      employeeCode: "ID employé",
      tempPassword: 'Mot de passe temporaire',
      doctorType: 'Catégorie médecin',
      doctorFull: 'Temps plein',
      doctorLocum: 'Vacataire',
      doctorRate: 'Taux vacataire (%)',
      doctorSex: 'Sexe',
      doctorAge: 'Âge',
      doctorReg: 'N° ordre des médecins',
      doctorTax: 'Identifiant fiscal (OTR / NIF)',
      doctorSpecialty: 'Spécialité',
      doctorFee: 'Honoraires négociés (CFL)',
      doctorOtr: 'Taux OTR',
      sexFemale: 'Femme',
      sexMale: 'Homme',
      sexOther: 'Autre',
      create: 'Créer le profil',
      listTitle: 'Liste du personnel',
      listName: 'Nom',
      listRole: 'Rôle',
      listEmail: 'Email',
      listCode: 'ID employé',
      listEmpty: 'Aucun profil pour le moment.',
      roleBadge: 'Rôle : {role}',
      roleUnknown: 'Rôle attribué',
      messages: {
        adminRequired: 'Veuillez saisir les identifiants admin.',
        employeeRequired: 'Veuillez saisir les identifiants employé.',
        employeeNotFound: 'Employé introuvable. Vérifiez les identifiants.',
        created: 'Profil employé créé.',
        staffRequired: 'Veuillez compléter les champs obligatoires.',
        locumRateRequired: 'Veuillez saisir le taux vacataire (%).',
      },
    },
    billing: {
      title: 'Facturation & Admission du patient',
      subtitle: "Enregistrez les patients, validez l'assurance et générez la facturation.",
      admissionTitle: 'Admission du patient',
      newPatient: 'Nouveau patient',
      returningPatient: 'Ancien patient',
      patientSearch: 'Rechercher un patient',
      patientSearchPlaceholder: 'Rechercher par nom, ID ou téléphone',
      fullName: 'Nom complet',
      sex: 'Sexe',
      sexFemale: 'Femme',
      sexMale: 'Homme',
      sexOther: 'Autre',
      dob: 'Date de naissance',
      age: 'Âge',
      address: 'Adresse',
      phone: 'Téléphone',
      emergencyPhone: "Contact d'urgence",
      whatsapp: 'WhatsApp',
      profession: 'Profession',
      profEmployee: 'Salarié (public ou privé)',
      profSelf: 'Travailleur indépendant (commerçant, artisan, agriculteur, pêcheur, etc.)',
      profCivil: "Fonctionnaire d'État",
      profStudent: 'Étudiant',
      profRetired: 'Retraité',
      profUnemployed: 'Sans emploi',
      profHome: 'Femme au foyer',
      education: "Niveau d'éducation",
      educationPrimary: 'Primaire',
      educationSecondary: 'Secondaire',
      educationTertiary: 'Universitaire',
      educationOther: 'Autre',
      insuranceTitle: 'Assurance & couverture',
      pricingTitle: "Table de tarification assurance (optionnel)",
      pricingProvider: "Assureur",
      pricingCode: "Code de prestation",
      pricingLabel: "Libellé de prestation",
      pricingPrice: "Prix CFL",
      pricingBase: "Base de remboursement",
      pricingAdd: "Enregistrer la tarification",
      pricingEmpty: "Aucune tarification enregistrée.",
      pricingRequired: "Sélectionnez un assureur et un service.",
      pricingSaved: "Tarification enregistrée.",
      insuranceType: "Type d'assurance",
      insuranceId: "Numéro d'assurance / dossier",
      coverageRate: 'Taux de couverture',
      patientId: "Numéro d'identification (carte nationale, assurance, ou dossier médical)",
      servicesTitle: 'Motif de visite (sélections multiples possibles)',
      serviceConsult: 'Consultation',
      serviceLab: 'Analyse biologique',
      serviceImaging: 'Imagerie médicale',
      serviceHospital: 'Hospitalisation',
      serviceSurgery: 'Chirurgie',
      serviceOutpatient: 'Soins ambulatoires',
      servicePharmacy: 'Pharmacie',
      hospitalList: "Services d'hospitalisation",
      surgeryList: 'Services de chirurgie',
      outpatientList: 'Soins ambulatoires',
      consultList: 'Type de consultation',
      assignDoctor: 'Assigner un médecin',
      doctorPlaceholder: 'Sélectionner un médecin',
      noDoctor: 'Aucun médecin disponible',
      consultationCost: 'Coût de consultation (CFL)',
      addConsultation: 'Ajouter la consultation à la facture',
      provideServices: 'Proposer des services',
      savePatient: 'Enregistrer le patient',
      consultationItem: 'Consultation',
      consultationRequired: 'Veuillez saisir le coût de consultation.',
      consultAdded: 'Consultation ajoutée à la facture.',
      patientRequired: 'Veuillez compléter toutes les informations requises du patient.',
      patientSaved: 'Profil patient enregistré.',
      patientLoaded: 'Profil patient chargé.',
      labList: 'Analyses biologiques',
      imagingList: "Services d'imagerie",
      billingTitle: 'Actes facturés',
      item: 'Acte / Médicament',
      itemPlaceholder: 'ex. Consultation',
      code: 'Code',
      inamCode: 'Code INAM',
      codePlaceholder: 'Code',
      inamPlaceholder: 'Code INAM',
      category: 'Catégorie',
      qty: 'Qté',
      unitPrice: 'Prix unitaire (CFL)',
      base: 'Base de remboursement',
      rate: 'Taux',
      total: 'Total',
      insuranceShareShort: 'Assurance',
      patientShareShort: 'Part calculée',
      actualPatientShare: 'Part patient réelle',
      addLine: 'Ajouter une ligne',
      summaryTitle: 'Résumé de facturation',
      totalCfl: 'Total (CFL)',
      insuranceShare: 'Part assurance',
      patientShare: 'Part assuré',
      notes: 'Notes de facturation',
      remove: 'Retirer',
    },
    services: {
      title: 'Proposer des services',
      subtitle: 'Sélectionnez les services à ajouter à la facturation.',
      back: "Retour à l'admission",
      selectHint: 'Sélectionnez un ou plusieurs services.',
      consultations: 'Consultation (liste)',
      labTests: 'Analyses de laboratoire (liste)',
      imaging: 'Imagerie médicale (liste)',
      hospitalization: 'Hospitalisation (liste)',
      surgery: 'Chirurgie (liste)',
      outpatient: 'Soins ambulatoires (liste)',
      medications: 'Médicaments pour hospitalisation & soins',
      medicationName: 'Médicament (Commercial / DCI)',
      medicationPrice: 'Prix unitaire (CFL)',
      medicationQty: 'Qté',
      addSelected: 'Ajouter les services sélectionnés',
      clear: 'Vider la sélection',
      empty: 'Sélectionnez au moins un service ou médicament.',
      added: 'Services ajoutés à la facturation.',
    },
    appointments: {
      title: 'Planification des rendez-vous',
      subtitle: 'Créez des visites, suivez les rendez-vous et gérez les demandes patients.',
      createTitle: 'Créer un rendez-vous',
      patientName: 'Nom du patient',
      patientPhone: 'Téléphone du patient',
      doctor: 'Médecin',
      service: 'Service',
      date: 'Date',
      time: 'Heure',
      notes: 'Notes',
      create: 'Planifier le rendez-vous',
      listTitle: 'Rendez-vous à venir',
      status: 'Statut',
      statusScheduled: 'Programmé',
      statusCompleted: 'Réalisé',
      statusCancelled: 'Annulé',
      portalTitle: 'Prise de rendez-vous en ligne',
      portalDesc: 'Partagez un lien de réservation avec les patients.',
      portalLink: 'Lien de réservation',
      copyLink: 'Copier le lien',
      required: 'Veuillez renseigner le patient, le médecin, la date et l’heure.',
      saved: 'Rendez-vous enregistré.',
      copied: 'Lien de réservation copié.',
    },
    inventory: {
      title: 'Inventaire & Stock',
      subtitle: 'Suivez les médicaments, dates de péremption et alertes de stock.',
      addTitle: 'Ajouter un médicament',
      name: 'Médicament (Commercial / DCI)',
      unitPrice: 'Prix unitaire (CFL)',
      quantity: 'Quantité',
      minLevel: 'Seuil minimum',
      entryDate: "Date d'entrée",
      expiryDate: 'Date de péremption',
      receipt: 'Reçu fournisseur',
      add: 'Ajouter au stock',
      listTitle: 'Liste de stock',
      purchaseTitle: 'Bons de commande',
      supplier: 'Fournisseur',
      orderItem: 'Article',
      orderQty: 'Quantité',
      orderDate: 'Date prévue',
      createOrder: 'Créer le bon',
      status: 'Statut',
      statusOk: 'OK',
      statusLow: 'Faible',
      statusExpired: 'Expiré',
      statusOpen: 'Ouvert',
      statusReceived: 'Reçu',
      update: 'Mettre à jour',
      remove: 'Retirer',
      required: 'Veuillez saisir le nom du médicament.',
      saved: 'Élément de stock enregistré.',
      poRequired: "Veuillez renseigner le fournisseur, l’article et la quantité.",
      poSaved: 'Bon de commande créé.',
    },
    reports: {
      title: 'Tableaux de bord & Rapports',
      subtitle: 'Suivez l’activité et exportez les données clés.',
      serviceBreakdown: 'Répartition des services',
      consultations: 'Consultations',
      lab: 'Analyses',
      imaging: 'Imagerie',
      hospital: 'Hospitalisation',
      surgery: 'Chirurgie',
      outpatient: 'Soins ambulatoires',
      pharmacy: 'Pharmacie',
      trendsTitle: 'Tendances (7 derniers jours)',
      trendDay: 'Jour',
      trendCount: 'Total des actes',
      payslipsTitle: 'Fiches de paie des médecins',
      doctor: 'Médecin',
      gross: 'Brut',
      otr: 'OTR',
      net: 'Net',
      download: 'Télécharger',
    },
    receipt: {
      generate: 'Générer le reçu',
      print: 'Imprimer le reçu',
      authorization: 'Autorisation N° : __________',
      title: "Reçu d'encaissement N°",
      cashier: 'Caisse :',
      date: 'Date :',
      time: 'Heure :',
      clientCode: 'Code client :',
      lastName: 'Nom :',
      firstName: 'Prénom :',
      address: 'Domicile :',
      insurer: 'Assureur :',
      sex: 'Sexe :',
      dob: 'Né(e), le :',
      profession: 'Profession :',
      phone: 'Tel :',
      coverage: 'Taux :',
      policy: 'N° Police :',
      service: 'Libellé prestations',
      code: 'Code',
      inam: 'Code INAM',
      qty: 'Qté',
      unitPrice: 'Prix unitaire',
      rate: 'Taux',
      amount: 'Montant',
      insuranceShare: 'Part. Assureur',
      patientShare: 'Part. Patient',
      totalNet: 'Total net à payer :',
      totalInsurance: 'Total assurance :',
      proceedNote: "Reçu généré. Le patient peut accéder à la consultation.",
    },
    messages: {
      signInRequired: 'Veuillez saisir le code établissement et le mot de passe.',
      signUpRequired: 'Veuillez compléter les informations de l’établissement.',
    },
  },
};

function t(path) {
  const parts = path.split('.');
  let value = translations[currentLang];
  for (const part of parts) {
    value = value?.[part];
  }
  return value ?? path;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = 'MediTrack';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (key) {
      el.setAttribute('placeholder', t(key));
    }
  });
  if (!currentFacility && facilityName) {
    facilityName.textContent = t('header.facilityDashboard');
  }
  applyFacilityBrand();
  refreshBillingRowsLanguage();
  refreshAppointmentServiceOptions();
  applyRoleAccess();
  populateDoctorSelect();
  populateAppointmentDoctors();
  renderPricingTable();
  renderAppointmentsTable();
  renderStockTable();
  renderPurchaseOrders();
  renderReports();
  refreshDashboardIfVisible();
}

function setAuthMode(mode) {
  const isSignIn = mode === 'signin';
  signInForm.classList.toggle('hidden', !isSignIn);
  signUpForm.classList.toggle('hidden', isSignIn);
  tabSignIn.classList.toggle('active', isSignIn);
  tabSignUp.classList.toggle('active', !isSignIn);
}

function setStaffAccessMode(mode) {
  staffAccessMode = mode;
  if (!staffAdminCard || !staffEmployeeCard) return;
  if (!mode) {
    staffAdminCard.classList.remove('hidden');
    staffEmployeeCard.classList.remove('hidden');
    return;
  }
  staffAdminCard.classList.toggle('hidden', mode !== 'admin');
  staffEmployeeCard.classList.toggle('hidden', mode !== 'employee');
}

function openStaffAdminPanel() {
  showView('staff-access');
  if (staffAccessGrid) staffAccessGrid.classList.add('hidden');
  if (staffAdminPanel) {
    staffAdminPanel.classList.remove('hidden');
    renderStaffList();
  }
}

function showView(view) {
  welcomeView.classList.add('hidden');
  modulesView.classList.add('hidden');
  moduleBillingView.classList.add('hidden');
  serviceSelectionView?.classList.add('hidden');
  appointmentsView?.classList.add('hidden');
  inventoryView?.classList.add('hidden');
  analyticsView?.classList.add('hidden');
  serviceCatalogView?.classList.add('hidden');
  insurancePartnersView?.classList.add('hidden');
  staffSelectView?.classList.add('hidden');
  staffAccessView.classList.add('hidden');
  roleDashboardView.classList.add('hidden');
  facilityProfileView?.classList.add('hidden');
  if (view === 'modules') {
    modulesView.classList.remove('hidden');
    topBar.classList.remove('hidden');
    applyRoleAccess();
    return;
  }
  if (view === 'billing') {
    moduleBillingView.classList.remove('hidden');
    topBar.classList.remove('hidden');
    populateDoctorSelect();
    renderPricingTable();
    return;
  }
  if (view === 'services') {
    serviceSelectionView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    return;
  }
  if (view === 'appointments') {
    appointmentsView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    populateAppointmentDoctors();
    renderAppointmentsTable();
    return;
  }
  if (view === 'inventory') {
    inventoryView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    renderStockTable();
    renderPurchaseOrders();
    return;
  }
  if (view === 'analytics') {
    analyticsView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    renderReports();
    return;
  }
  if (view === 'service-catalog') {
    serviceCatalogView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    pendingServiceInsurance = [];
    populateServiceInsuranceOptions();
    renderServiceInsuranceTable();
    renderServiceCatalog();
    return;
  }
  if (view === 'insurance-partners') {
    insurancePartnersView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    renderInsurancePartners();
    return;
  }
  if (view === 'facility-profile') {
    facilityProfileView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    populateFacilityProfileForm();
    return;
  }
  if (view === 'staff') {
    staffSelectView?.classList.remove('hidden');
    setStaffAccessMode(null);
    topBar.classList.remove('hidden');
    return;
  }
  if (view === 'staff-access') {
    staffAccessView.classList.remove('hidden');
    topBar.classList.remove('hidden');
    return;
  }
  if (view === 'dashboard') {
    roleDashboardView.classList.remove('hidden');
    topBar.classList.remove('hidden');
    renderRoleDashboard();
    return;
  }
  welcomeView.classList.remove('hidden');
  topBar.classList.add('hidden');
}

function setMessage(el, msg) {
  if (!el) return;
  el.textContent = msg;
}

if (langSelect) {
  langSelect.addEventListener('change', (event) => {
    currentLang = event.target.value;
    applyTranslations();
  });
}

if (tabSignIn) {
  tabSignIn.addEventListener('click', () => setAuthMode('signin'));
}

if (tabSignUp) {
  tabSignUp.addEventListener('click', () => setAuthMode('signup'));
}

if (signInForm) {
  signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const code = signInCode?.value?.trim();
    const password = document.getElementById('signInPassword')?.value?.trim();
    if (!code || !password) {
      setMessage(signInMessage, t('messages.signInRequired'));
      return;
    }
    const profile = getFacilityProfile(code);
    currentFacilityProfile = profile;
    currentFacility = profile?.code || code;
    applyFacilityBrand();
    currentEmployee = null;
    applyRoleAccess();
    setMessage(signInMessage, '');
    showView('staff');
  });
}

if (signUpForm) {
  signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const requiredFields = [
      signUpFacility?.value?.trim(),
      signUpEmail?.value?.trim(),
      signUpPhone?.value?.trim(),
      signUpCity?.value?.trim(),
      signUpCountry?.value?.trim(),
      signUpCode?.value?.trim(),
      document.getElementById('signUpPassword')?.value?.trim(),
    ];
    if (requiredFields.some((field) => !field)) {
      setMessage(signUpMessage, t('messages.signUpRequired'));
      return;
    }
    const facilityCode = signUpFacility.value.trim();
    const logoFile = signUpLogo?.files?.[0];
    const logoData = logoFile ? await readFileAsDataUrl(logoFile) : '';
    const profile = {
      code: facilityCode,
      name: signUpFacility.value.trim(),
      email: signUpEmail.value.trim(),
      phone: signUpPhone.value.trim(),
      city: signUpCity.value.trim(),
      country: signUpCountry.value.trim(),
      authorization: signUpCode.value.trim(),
      logo: logoData || '',
    };
    saveFacilityProfile(profile);
    currentFacilityProfile = profile;
    currentFacility = facilityCode;
    applyFacilityBrand();
    currentEmployee = null;
    applyRoleAccess();
    setMessage(signUpMessage, '');
    showView('staff');
  });
}

if (signOutBtn) {
  signOutBtn.addEventListener('click', () => {
    currentEmployee = null;
    staffAccessMode = null;
    applyRoleAccess();
    if (adminSignInForm) adminSignInForm.reset();
    if (employeeSignInForm) employeeSignInForm.reset();
    if (staffAdminPanel) staffAdminPanel.classList.add('hidden');
    if (currentFacility) {
      showView('staff');
      return;
    }
    signInForm.reset();
    signUpForm.reset();
    showView('welcome');
  });
}

if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    if (currentFacility) {
      showView('modules');
    }
  });
}

if (facilityProfileLogo) {
  facilityProfileLogo.addEventListener('change', async () => {
    const file = facilityProfileLogo.files?.[0];
    if (!facilityLogoPreview) return;
    if (!file) {
      facilityLogoPreview.classList.add('hidden');
      facilityLogoPreview.removeAttribute('src');
      return;
    }
    const dataUrl = await readFileAsDataUrl(file);
    if (dataUrl) {
      facilityLogoPreview.src = dataUrl;
      facilityLogoPreview.classList.remove('hidden');
    }
  });
}

if (facilityProfileForm) {
  facilityProfileForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const profile = currentFacilityProfile || {};
    const codeValue = facilityProfileCode?.value?.trim() || profile.code || currentFacility || '';
    if (!codeValue) return;
    const logoFile = facilityProfileLogo?.files?.[0];
    const logoData = logoFile ? await readFileAsDataUrl(logoFile) : profile.logo || '';
    const updated = {
      ...profile,
      code: codeValue,
      name: facilityProfileName?.value?.trim() || profile.name || codeValue,
      email: facilityProfileEmail?.value?.trim() || '',
      phone: facilityProfilePhone?.value?.trim() || '',
      city: facilityProfileCity?.value?.trim() || '',
      country: facilityProfileCountry?.value?.trim() || '',
      address: facilityProfileAddress?.value?.trim() || '',
      logo: logoData || '',
    };
    saveFacilityProfile(updated);
    currentFacilityProfile = updated;
    currentFacility = updated.code;
    applyFacilityBrand();
    if (facilityLogoPreview) {
      if (updated.logo) {
        facilityLogoPreview.src = updated.logo;
        facilityLogoPreview.classList.remove('hidden');
      } else {
        facilityLogoPreview.classList.add('hidden');
        facilityLogoPreview.removeAttribute('src');
      }
    }
    setMessage(facilityProfileMessage, t('facilityProfile.saved'));
  });
}

if (serviceCatalogForm) {
  serviceCatalogForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = serviceCatalogName?.value?.trim();
    const category = serviceCatalogCategory?.value || '';
    const diseaseCode = serviceCatalogDiseaseCode?.value?.trim() || '';
    const uninsuredPrice = Number.parseFloat(serviceCatalogUninsuredPrice?.value || '');
    if (!name || !category || !Number.isFinite(uninsuredPrice)) {
      setMessage(serviceCatalogMessage, t('serviceCatalog.required'));
      return;
    }
    const list = loadServiceCatalog();
    list.push({
      id: `svc_${Date.now()}`,
      name,
      category,
      diseaseCode,
      uninsuredPrice,
      insurancePricing: pendingServiceInsurance,
    });
    saveServiceCatalog(list);
    serviceCatalogForm.reset();
    pendingServiceInsurance = [];
    renderServiceInsuranceTable();
    setMessage(serviceCatalogMessage, t('serviceCatalog.saved'));
    renderServiceCatalog();
  });
}

if (serviceCatalogTable) {
  serviceCatalogTable.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-service-id]');
    if (!button) return;
    const id = button.getAttribute('data-service-id');
    if (!id) return;
    const list = loadServiceCatalog().filter((item) => item.id !== id);
    saveServiceCatalog(list);
    renderServiceCatalog();
  });
}

if (addServiceInsurance) {
  addServiceInsurance.addEventListener('click', () => {
    const partner = serviceInsurancePartner?.value || '';
    const code = serviceInsuranceCode?.value?.trim() || '';
    const price = Number.parseFloat(serviceInsurancePrice?.value || '');
    const base = Number.parseFloat(serviceInsuranceBase?.value || '');
    if (!partner || !code || !Number.isFinite(price) || !Number.isFinite(base)) {
      setMessage(serviceCatalogMessage, t('serviceCatalog.insuranceRequired'));
      return;
    }
    const existingIndex = pendingServiceInsurance.findIndex((entry) => entry.partner === partner);
    const entry = { partner, code, price, base };
    if (existingIndex >= 0) {
      pendingServiceInsurance[existingIndex] = entry;
    } else {
      pendingServiceInsurance.push(entry);
    }
    if (serviceInsuranceCode) serviceInsuranceCode.value = '';
    if (serviceInsurancePrice) serviceInsurancePrice.value = '';
    if (serviceInsuranceBase) serviceInsuranceBase.value = '';
    setMessage(serviceCatalogMessage, '');
    renderServiceInsuranceTable();
  });
}

if (serviceInsuranceTable) {
  serviceInsuranceTable.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-insurance-row]');
    if (!button) return;
    const partner = button.getAttribute('data-insurance-row');
    pendingServiceInsurance = pendingServiceInsurance.filter((entry) => entry.partner !== partner);
    renderServiceInsuranceTable();
  });
}

if (insuranceForm) {
  insuranceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = insuranceName?.value?.trim();
    const code = insuranceCode?.value?.trim() || '';
    const coverage = insuranceCoverage?.value || '';
    if (!name) {
      setMessage(insuranceMessage, t('insurance.required'));
      return;
    }
    const list = loadInsurancePartners();
    list.push({
      id: `ins_${Date.now()}`,
      name,
      code,
      email: insuranceEmail?.value?.trim() || '',
      phone: insurancePhone?.value?.trim() || '',
      coverage,
      policy: insurancePolicy?.value?.trim() || '',
      notes: insuranceNotes?.value?.trim() || '',
    });
    saveInsurancePartners(list);
    insuranceForm.reset();
    setMessage(insuranceMessage, t('insurance.saved'));
    renderInsurancePartners();
  });
}

if (insuranceTable) {
  insuranceTable.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-insurance-id]');
    if (!button) return;
    const id = button.getAttribute('data-insurance-id');
    if (!id) return;
    const list = loadInsurancePartners().filter((item) => item.id !== id);
    saveInsurancePartners(list);
    renderInsurancePartners();
  });
}

function parseNumber(value) {
  if (value === null || value === undefined || value === '') return 0;
  const normalized = String(value).replace(',', '.');
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCfl(value) {
  return `${Math.round(value).toLocaleString()} CFL`;
}

function getEmployeesKey() {
  if (currentFacility) {
    return `meditrack_employees_${currentFacility}`;
  }
  return 'meditrack_employees_default';
}

function loadEmployees() {
  try {
    const raw = localStorage.getItem(getEmployeesKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveEmployees(list) {
  try {
    localStorage.setItem(getEmployeesKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function renderStaffList() {
  if (!staffListBody) return;
  staffListBody.innerHTML = '';
  const employees = loadEmployees();
  if (!employees.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="4">${t('staff.listEmpty')}</td>`;
    staffListBody.appendChild(row);
    return;
  }
  employees.forEach((emp) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${emp.name || '-'}</td>
      <td>${emp.roleLabel || emp.role || '-'}</td>
      <td>${emp.email || '-'}</td>
      <td>${emp.code || '-'}</td>
    `;
    staffListBody.appendChild(row);
  });
}

function applyRoleAccess() {
  const cards = document.querySelectorAll('.module-card');
  if (!currentEmployee || !currentEmployee.role) {
    cards.forEach((card) => card.classList.remove('hidden'));
    if (employeeRoleBadge) employeeRoleBadge.classList.add('hidden');
    return;
  }
  const role = currentEmployee.role;
  cards.forEach((card) => {
    const roles = card.getAttribute('data-roles');
    if (!roles) {
      card.classList.remove('hidden');
      return;
    }
    const allowed = roles.split(',').map((r) => r.trim());
    card.classList.toggle('hidden', !allowed.includes(role));
  });
  if (employeeRoleBadge) {
    const label = currentEmployee.roleLabel || t('staff.roleUnknown');
    employeeRoleBadge.textContent = t('staff.roleBadge').replace('{role}', label);
    employeeRoleBadge.classList.remove('hidden');
  }
}

function filterSectionByRole() {
  const sections = document.querySelectorAll('[data-role]');
  sections.forEach((section) => {
    if (!currentEmployee?.role) {
      section.classList.add('hidden');
      return;
    }
    const role = currentEmployee.role;
    section.classList.toggle('hidden', section.dataset.role !== role);
  });
}

function countByDays(records, days) {
  const now = Date.now();
  return records.filter((rec) => {
    const timestamp = new Date(rec.createdAt || rec.date || rec.created_at || '').getTime();
    if (!timestamp) return false;
    return now - timestamp <= days * 24 * 60 * 60 * 1000;
  }).length;
}

function sumReceiptTotals(receipts) {
  return receipts.reduce(
    (acc, rec) => {
      acc.total += rec.total || 0;
      acc.insurance += rec.insuranceTotal || 0;
      acc.patient += rec.patientTotal || 0;
      return acc;
    },
    { total: 0, insurance: 0, patient: 0 }
  );
}

function getDoctorPayments() {
  const employees = loadEmployees().filter((emp) => emp.role === 'doctor');
  return employees.map((doc) => {
    const docKey = doc.code || doc.email || doc.name;
    const payslip = calculateDoctorPayslip(doc);
    return { name: doc.name || docKey, amount: payslip.net };
  });
}

function renderDoctorPayments(target) {
  if (!target) return;
  target.innerHTML = '';
  const payments = getDoctorPayments();
  if (!payments.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="2">${t('dashboard.noData')}</td>`;
    target.appendChild(row);
    return;
  }
  payments.forEach((payment) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${payment.name}</td><td>${formatCfl(payment.amount)}</td>`;
    target.appendChild(row);
  });
}

function renderRoleDashboard() {
  if (!currentEmployee?.role) return;
  filterSectionByRole();
  const patients = loadPatients();
  const receipts = loadReceipts();

  if (dashboardRoleLabel) {
    const roleLabel = currentEmployee.roleLabel || currentEmployee.role || '';
    dashboardRoleLabel.textContent = t('dashboard.roleLabel').replace('{role}', roleLabel);
  }

  if (currentEmployee.role === 'admission') {
    const totals = sumReceiptTotals(receipts);
    if (admTotalPatients) admTotalPatients.textContent = patients.length.toString();
    if (admVisitsToday) admVisitsToday.textContent = countByDays(patients, 1).toString();
    if (admVisitsWeek) admVisitsWeek.textContent = countByDays(patients, 7).toString();
    if (admVisitsMonth) admVisitsMonth.textContent = countByDays(patients, 30).toString();
    if (admPaidPatients) admPaidPatients.textContent = formatCfl(totals.patient);
    if (admPaidInsurance) admPaidInsurance.textContent = formatCfl(totals.insurance);
    if (admStaffTable) {
      const counts = patients.reduce((acc, rec) => {
        const key = rec.admittedBy || t('dashboard.unknownStaff');
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});
      admStaffTable.innerHTML = '';
      Object.entries(counts).forEach(([staff, count]) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${staff}</td><td>${count}</td>`;
        admStaffTable.appendChild(row);
      });
    }
  }

  if (currentEmployee.role === 'doctor') {
    const docKey = currentEmployee.code || currentEmployee.email || currentEmployee.name;
    const assigned = patients.filter((p) => p.doctor === docKey);
    if (docPatientsCount) docPatientsCount.textContent = assigned.length.toString();
    if (docUpcoming) {
      const appointments = loadAppointments();
      const upcoming = appointments.filter(
        (appt) => appt.doctor === docKey && appt.status === 'scheduled'
      ).length;
      docUpcoming.textContent = upcoming.toString();
    }
    if (docCompleted) docCompleted.textContent = receipts.filter((r) => r.doctor === docKey).length.toString();
    if (docPatientList) {
      docPatientList.innerHTML = '';
      assigned.slice(0, 6).forEach((p) => {
        const li = document.createElement('li');
        li.textContent = p.name || '-';
        docPatientList.appendChild(li);
      });
    }
    const payslip = calculateDoctorPayslip(currentEmployee);
    if (docRemuneration) docRemuneration.textContent = formatCfl(payslip.net);
    if (docGross) docGross.textContent = formatCfl(payslip.gross);
    if (docOtr) docOtr.textContent = formatCfl(payslip.otr);
    if (docNet) docNet.textContent = formatCfl(payslip.net);
  }

  if (currentEmployee.role === 'nurse') {
    if (nursePatients) nursePatients.textContent = patients.length.toString();
    if (nurseTasks) nurseTasks.textContent = '0';
    if (nurseMonthly) nurseMonthly.textContent = countByDays(patients, 30).toString();
    renderDoctorPayments(nurseDoctorPayments);
  }

  if (currentEmployee.role === 'lab') {
    const labItems = receipts.flatMap((r) => r.items || []).filter((i) => i.category === 'lab');
    if (labPending) labPending.textContent = labItems.length.toString();
    if (labInProgress) labInProgress.textContent = '0';
    if (labCompleted) labCompleted.textContent = '0';
  }

  if (currentEmployee.role === 'radiology') {
    const imagingItems = receipts
      .flatMap((r) => r.items || [])
      .filter((i) => i.category === 'imaging');
    if (radioScheduled) radioScheduled.textContent = imagingItems.length.toString();
    if (radioCompleted) radioCompleted.textContent = '0';
  }

  if (currentEmployee.role === 'pharmacy') {
    const pharmacyItems = receipts
      .flatMap((r) => r.items || [])
      .filter((i) => i.category === 'pharmacy');
    if (pharmacyDispensed) pharmacyDispensed.textContent = pharmacyItems.length.toString();
    updateStockAlerts();
  }

  if (currentEmployee.role === 'accountant') {
    const totals = sumReceiptTotals(receipts);
    if (accRevenue) accRevenue.textContent = formatCfl(totals.total);
    if (accPatient) accPatient.textContent = formatCfl(totals.patient);
    if (accInsurance) accInsurance.textContent = formatCfl(totals.insurance);
    if (accOutstanding) accOutstanding.textContent = formatCfl(0);
    renderDoctorPayments(accDoctorPayments);
  }

  if (currentEmployee.role === 'director') {
    const totals = sumReceiptTotals(receipts);
    if (dirPatients) dirPatients.textContent = patients.length.toString();
    if (dirServices) {
      const serviceCount = receipts.flatMap((r) => r.items || []).length;
      dirServices.textContent = serviceCount.toString();
    }
    if (dirRevenue) dirRevenue.textContent = formatCfl(totals.total);
    if (dirStaffProductivity) dirStaffProductivity.textContent = patients.length.toString();
  }
}

function refreshDashboardIfVisible() {
  if (roleDashboardView && !roleDashboardView.classList.contains('hidden')) {
    renderRoleDashboard();
  }
}

function populateDoctorSelect() {
  if (!assignDoctor) return;
  const employees = loadEmployees();
  const doctors = employees.filter((emp) => emp.role === 'doctor');
  assignDoctor.innerHTML = `<option value="">${t('billing.doctorPlaceholder')}</option>`;
  if (!doctors.length) {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = t('billing.noDoctor');
    assignDoctor.appendChild(option);
    return;
  }
  doctors.forEach((doc) => {
    const option = document.createElement('option');
    option.value = doc.code || doc.email || doc.name;
    const specialty = doc.doctorProfile?.specialty ? ` — ${doc.doctorProfile.specialty}` : '';
    option.textContent = `${doc.name || doc.email || doc.code}${specialty}`;
    assignDoctor.appendChild(option);
  });
}

function updateBillingTotals() {
  if (!billingTableBody) return;
  let total = 0;
  let insuranceTotal = 0;
  let patientTotal = 0;
  const coverage = parseNumber(coverageRate?.value);
  const provider = normalizeProvider(insuranceProvider?.value);
  const baseMultiplier = provider === 'INAM' || provider === 'AMU' ? 0.8 : 1;
  billingTableBody.querySelectorAll('tr').forEach((row) => {
    const qtyInput = row.querySelector('.billing-qty');
    const priceInput = row.querySelector('.billing-price');
    const baseInput = row.querySelector('.billing-base');
    const actualInput = row.querySelector('.billing-actual');
    const totalCell = row.querySelector('.billing-total');
    const insuranceCell = row.querySelector('.billing-insurance');
    const patientCell = row.querySelector('.billing-patient');
    const rateCell = row.querySelector('.billing-rate');
    const qty = parseNumber(qtyInput?.value);
    const price = parseNumber(priceInput?.value);
    const baseManual = baseInput?.dataset.manual === 'true';
    let baseUnit = parseNumber(baseInput?.value);
    const lineTotal = qty * price;
    if (baseInput && !baseManual && price > 0) {
      baseUnit = Math.round(price * baseMultiplier);
      baseInput.value = baseUnit || '';
    }
    if (totalCell) {
      totalCell.textContent = formatCfl(lineTotal);
    }
    const baseTotalRaw = qty * baseUnit;
    const baseTotal = baseTotalRaw > 0 ? Math.min(baseTotalRaw, lineTotal) : lineTotal;
    const insurance = coverage ? baseTotal * (coverage / 100) : 0;
    const calculatedPatient = Math.max(0, baseTotal - insurance);
    const actualDefault = Math.max(0, calculatedPatient + Math.max(0, lineTotal - baseTotal));
    let actualPatient = actualDefault;
    if (actualInput) {
      const manual = actualInput.dataset.manual === 'true';
      const manualValue = parseNumber(actualInput.value);
      if (manual && manualValue > 0) {
        actualPatient = manualValue;
      } else {
        actualInput.value = actualDefault ? Math.round(actualDefault) : '';
        actualInput.dataset.manual = '';
      }
    }
    if (insuranceCell) insuranceCell.textContent = formatCfl(insurance);
    if (patientCell) patientCell.textContent = formatCfl(calculatedPatient);
    if (rateCell) rateCell.textContent = coverage ? `${coverage}%` : '--';
    total += lineTotal;
    insuranceTotal += insurance;
    patientTotal += actualPatient;
  });
  if (billingTotal) billingTotal.textContent = formatCfl(total);
  if (insuranceShare) insuranceShare.textContent = formatCfl(insuranceTotal);
  if (patientShare) patientShare.textContent = formatCfl(patientTotal);
}

function createBillingRow() {
  const row = document.createElement('tr');
  const categories = [
    { value: 'consultation', label: t('billing.serviceConsult') },
    { value: 'lab', label: t('billing.serviceLab') },
    { value: 'imaging', label: t('billing.serviceImaging') },
    { value: 'hospital', label: t('billing.serviceHospital') },
    { value: 'surgery', label: t('billing.serviceSurgery') },
    { value: 'outpatient', label: t('billing.serviceOutpatient') },
    { value: 'pharmacy', label: t('billing.servicePharmacy') },
  ];
  const categoryOptions = categories
    .map((cat) => `<option value="${cat.value}">${cat.label}</option>`)
    .join('');
  row.innerHTML = `
    <td><input type="text" placeholder="${t('billing.itemPlaceholder')}" /></td>
    <td><input class="billing-code" type="text" placeholder="${t('billing.codePlaceholder')}" /></td>
    <td><input class="billing-inam" type="text" placeholder="${t('billing.inamPlaceholder')}" /></td>
    <td>
      <select>
        ${categoryOptions}
      </select>
    </td>
    <td><input class="billing-qty" type="number" min="1" value="1" /></td>
    <td><input class="billing-price" type="number" min="0" step="1" value="0" /></td>
    <td><input class="billing-base" type="number" min="0" step="1" value="0" /></td>
    <td class="billing-rate">--</td>
    <td class="billing-total">0 CFL</td>
    <td class="billing-insurance">0 CFL</td>
    <td class="billing-patient">0 CFL</td>
    <td><input class="billing-actual" type="number" min="0" step="1" /></td>
    <td><button type="button" class="remove-row" data-i18n="billing.remove">Remove</button></td>
  `;
  row.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('input', updateBillingTotals);
  });
  const baseInput = row.querySelector('.billing-base');
  if (baseInput) {
    baseInput.addEventListener('input', () => {
      baseInput.dataset.manual = baseInput.value ? 'true' : '';
      updateBillingTotals();
    });
  }
  const actualInput = row.querySelector('.billing-actual');
  if (actualInput) {
    actualInput.addEventListener('input', () => {
      actualInput.dataset.manual = actualInput.value ? 'true' : '';
      updateBillingTotals();
    });
  }
  row.querySelector('.remove-row')?.addEventListener('click', () => {
    row.remove();
    updateBillingTotals();
  });
  return row;
}

function refreshBillingRowsLanguage() {
  if (!billingTableBody) return;
  const categories = [
    { value: 'consultation', label: t('billing.serviceConsult') },
    { value: 'lab', label: t('billing.serviceLab') },
    { value: 'imaging', label: t('billing.serviceImaging') },
    { value: 'hospital', label: t('billing.serviceHospital') },
    { value: 'surgery', label: t('billing.serviceSurgery') },
    { value: 'outpatient', label: t('billing.serviceOutpatient') },
    { value: 'pharmacy', label: t('billing.servicePharmacy') },
  ];
  billingTableBody.querySelectorAll('tr').forEach((row) => {
    const input = row.querySelector('input[type="text"]');
    if (input) {
      input.setAttribute('placeholder', t('billing.itemPlaceholder'));
    }
    const codeInput = row.querySelector('.billing-code');
    if (codeInput) {
      codeInput.setAttribute('placeholder', t('billing.codePlaceholder'));
    }
    const inamInput = row.querySelector('.billing-inam');
    if (inamInput) {
      inamInput.setAttribute('placeholder', t('billing.inamPlaceholder'));
    }
    const select = row.querySelector('select');
    if (select) {
      const currentValue = select.value;
      select.innerHTML = categories
        .map((cat) => `<option value="${cat.value}">${cat.label}</option>`)
        .join('');
      select.value = currentValue || 'consultation';
    }
    const removeBtn = row.querySelector('.remove-row');
    if (removeBtn) {
      removeBtn.textContent = t('billing.remove');
    }
  });
}

function refreshAppointmentServiceOptions() {
  if (!appointmentService) return;
  const currentValue = appointmentService.value;
  appointmentService.innerHTML = `
    <option value="">${t('select.placeholder')}</option>
    <option value="consultation">${t('billing.serviceConsult')}</option>
    <option value="lab">${t('billing.serviceLab')}</option>
    <option value="imaging">${t('billing.serviceImaging')}</option>
    <option value="hospital">${t('billing.serviceHospital')}</option>
    <option value="surgery">${t('billing.serviceSurgery')}</option>
    <option value="outpatient">${t('billing.serviceOutpatient')}</option>
  `;
  appointmentService.value = currentValue || '';
}

function addServiceToBilling(service) {
  if (!billingTableBody) return;
  const row = createBillingRow();
  const itemInput = row.querySelector('input[type="text"]');
  if (itemInput) itemInput.value = service.label || '';
  const codeInput = row.querySelector('.billing-code');
  if (codeInput) codeInput.value = service.code || '';
  const inamInput = row.querySelector('.billing-inam');
  if (inamInput) inamInput.value = service.inam || '';
  const categorySelect = row.querySelector('select');
  if (categorySelect) categorySelect.value = service.category || 'consultation';
  const qtyInput = row.querySelector('.billing-qty');
  if (qtyInput) qtyInput.value = service.qty || 1;
  const priceInput = row.querySelector('.billing-price');
  if (priceInput) priceInput.value = service.price || 0;
  const baseInput = row.querySelector('.billing-base');
  if (baseInput && service.base !== undefined && service.base !== null && service.base !== '') {
    baseInput.value = service.base;
    baseInput.dataset.manual = 'true';
  }
  billingTableBody.appendChild(row);
}

function collectSelectedServices() {
  const services = [];
  serviceSelects.forEach((select) => {
    const category = select.dataset.serviceCategory || 'consultation';
    Array.from(select.selectedOptions).forEach((option) => {
      services.push({
        label: option.value || option.textContent,
        category,
        code: option.dataset.code || '',
        inam: option.dataset.inam || '',
        price: parseNumber(option.dataset.price),
        qty: 1,
      });
    });
  });
  medicationChecks.forEach((check) => {
    if (!check.checked) return;
    const row = check.closest('tr');
    const qtyInput = row?.querySelector('.med-qty');
    const qty = parseNumber(qtyInput?.value) || 1;
    services.push({
      label: check.dataset.label || '',
      category: check.dataset.category || 'pharmacy',
      code: check.dataset.code || '',
      inam: check.dataset.inam || '',
      price: parseNumber(check.dataset.price),
      qty,
    });
  });
  return services;
}

function clearServiceSelections() {
  serviceSelects.forEach((select) => {
    Array.from(select.options).forEach((option) => {
      option.selected = false;
    });
  });
  medicationChecks.forEach((check) => {
    check.checked = false;
    const row = check.closest('tr');
    const qtyInput = row?.querySelector('.med-qty');
    if (qtyInput) qtyInput.value = 1;
  });
}

if (addBillingRow && billingTableBody) {
  addBillingRow.addEventListener('click', () => {
    billingTableBody.appendChild(createBillingRow());
    applyTranslations();
    updateBillingTotals();
  });
}

if (coverageRate) {
  coverageRate.addEventListener('change', updateBillingTotals);
}

if (insuranceProvider) {
  insuranceProvider.addEventListener('change', updateBillingTotals);
}

if (provideServicesBtn) {
  provideServicesBtn.addEventListener('click', () => {
    setMessage(serviceSelectionMessage, '');
    showView('services');
  });
}

if (backToBillingFromServices) {
  backToBillingFromServices.addEventListener('click', () => showView('billing'));
}

if (addSelectedServices) {
  addSelectedServices.addEventListener('click', () => {
    const selected = collectSelectedServices();
    if (!selected.length) {
      setMessage(serviceSelectionMessage, t('services.empty'));
      return;
    }
    const provider = normalizeProvider(insuranceProvider?.value);
    selected.forEach((service) => {
      const rule = findPricingRule(provider, service);
      const price = rule?.price ?? service.price;
      const base = rule?.base ?? '';
      addServiceToBilling({ ...service, price, base });
    });
    updateBillingTotals();
    clearServiceSelections();
    setMessage(patientMessage, t('services.added'));
    showView('billing');
  });
}

if (clearServiceSelection) {
  clearServiceSelection.addEventListener('click', () => {
    clearServiceSelections();
    setMessage(serviceSelectionMessage, '');
  });
}

if (billingTableBody && billingTableBody.children.length === 0) {
  billingTableBody.appendChild(createBillingRow());
  updateBillingTotals();
}

if (moduleButtons && moduleButtons.length) {
  moduleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-module');
      if (target === 'billing') {
        showView('billing');
      } else if (target === 'staff') {
        if (currentEmployee?.role === 'director') {
          openStaffAdminPanel();
        } else {
          showView('staff');
        }
      } else if (target === 'dashboard') {
        showView('dashboard');
      } else if (target === 'appointments') {
        showView('appointments');
      } else if (target === 'inventory') {
        showView('inventory');
      } else if (target === 'analytics') {
        showView('analytics');
      } else if (target === 'facility-profile') {
        showView('facility-profile');
      } else if (target === 'service-catalog') {
        showView('service-catalog');
      } else if (target === 'insurance-partners') {
        showView('insurance-partners');
      }
    });
  });
}

if (backToModules) {
  backToModules.addEventListener('click', () => showView('modules'));
}

if (backToWelcome) {
  backToWelcome.addEventListener('click', () => {
    if (currentEmployee?.role === 'director') {
      showView('modules');
    } else {
      showView('staff');
    }
  });
}

if (backToWelcomeFromStaff) {
  backToWelcomeFromStaff.addEventListener('click', () => showView('welcome'));
}

if (chooseAdminBtn) {
  chooseAdminBtn.addEventListener('click', () => {
    setStaffAccessMode('admin');
    showView('staff-access');
    if (staffAccessGrid) staffAccessGrid.classList.remove('hidden');
    if (staffAdminPanel) staffAdminPanel.classList.add('hidden');
    adminSignInForm?.reset();
    setMessage(adminSignInMessage, '');
  });
}

if (chooseEmployeeBtn) {
  chooseEmployeeBtn.addEventListener('click', () => {
    setStaffAccessMode('employee');
    showView('staff-access');
    if (staffAccessGrid) staffAccessGrid.classList.remove('hidden');
    if (staffAdminPanel) staffAdminPanel.classList.add('hidden');
    employeeSignInForm?.reset();
    setMessage(employeeSignInMessage, '');
  });
}

if (backToModulesFromAppointments) {
  backToModulesFromAppointments.addEventListener('click', () => showView('modules'));
}

if (backToModulesFromInventory) {
  backToModulesFromInventory.addEventListener('click', () => showView('modules'));
}

if (backToModulesFromAnalytics) {
  backToModulesFromAnalytics.addEventListener('click', () => showView('modules'));
}

if (backToModulesFromServiceCatalog) {
  backToModulesFromServiceCatalog.addEventListener('click', () => showView('modules'));
}

if (backToModulesFromInsurance) {
  backToModulesFromInsurance.addEventListener('click', () => showView('modules'));
}

if (backToModulesFromFacility) {
  backToModulesFromFacility.addEventListener('click', () => showView('modules'));
}

if (goToModules) {
  goToModules.addEventListener('click', () => showView('modules'));
}

if (backToModulesFromDashboard) {
  backToModulesFromDashboard.addEventListener('click', () => showView('modules'));
}

if (adminSignInForm) {
  adminSignInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!adminId?.value?.trim() || !adminPassword?.value?.trim()) {
      setMessage(adminSignInMessage, t('staff.messages.adminRequired'));
      return;
    }
    const adminCode = adminId.value.trim();
    currentEmployee = {
      name: adminCode,
      role: 'director',
      roleLabel: t('staff.roleDirector'),
      code: adminCode,
    };
    applyRoleAccess();
    setMessage(adminSignInMessage, '');
    showView('modules');
  });
}

if (staffForm) {
  staffForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = staffName?.value?.trim();
    const role = staffRole?.value;
    const email = staffEmail?.value?.trim();
    const phone = staffPhone?.value?.trim();
    const code = staffCode?.value?.trim();
    const tempPassword = staffTempPassword?.value?.trim();
    const employmentType = staffEmploymentType?.value || 'permanent';
    const locumRate = employmentType === 'locum' ? parseNumber(staffLocumRate?.value) : 0;
    if (!name || !role || !code || !tempPassword) {
      setMessage(staffMessage, t('staff.messages.staffRequired'));
      return;
    }
    if (employmentType === 'locum' && !Number.isFinite(locumRate)) {
      setMessage(staffMessage, t('staff.messages.locumRateRequired'));
      return;
    }
    const roleLabel = staffRole.options[staffRole.selectedIndex]?.textContent || role;
    const payType = role === 'doctor' ? employmentType : null;
    const payRate = role === 'doctor' && employmentType === 'locum' ? locumRate : 0;
    const doctorProfile =
      role === 'doctor'
        ? {
            sex: doctorSex?.value || '',
            age: doctorAge?.value || '',
            registration: doctorReg?.value?.trim() || '',
            taxId: doctorTax?.value?.trim() || '',
            specialty: doctorSpecialty?.value?.trim() || '',
            serviceFee: parseNumber(doctorFee?.value),
            otrRate: parseNumber(doctorOtr?.value),
          }
        : null;
    const employees = loadEmployees();
    employees.push({
      name,
      role,
      roleLabel,
      email,
      phone,
      code,
      password: tempPassword,
      employmentType,
      locumRate,
      payType,
      payRate,
      doctorProfile,
    });
    saveEmployees(employees);
    staffForm.reset();
    if (staffEmploymentType) staffEmploymentType.value = 'permanent';
    if (staffLocumRate) staffLocumRate.value = '';
    setMessage(staffMessage, t('staff.messages.created'));
    renderStaffList();
    populateDoctorSelect();
    populateAppointmentDoctors();
    toggleDoctorFields();
    syncLocumRateField();
  });
}

function toggleDoctorFields() {
  if (!doctorFields || !staffRole) return;
  const isDoctor = staffRole.value === 'doctor';
  doctorFields.style.display = isDoctor ? 'grid' : 'none';
  if (!isDoctor) {
    if (doctorSex) doctorSex.value = '';
    if (doctorAge) doctorAge.value = '';
    if (doctorReg) doctorReg.value = '';
    if (doctorTax) doctorTax.value = '';
    if (doctorSpecialty) doctorSpecialty.value = '';
    if (doctorFee) doctorFee.value = '';
    if (doctorOtr) doctorOtr.value = '';
  }
}

if (staffRole) {
  staffRole.addEventListener('change', toggleDoctorFields);
  toggleDoctorFields();
}

function syncLocumRateField() {
  if (!staffEmploymentType || !staffLocumRate) return;
  const isLocum = staffEmploymentType.value === 'locum';
  staffLocumRate.disabled = !isLocum;
  if (!isLocum) {
    staffLocumRate.value = '';
  }
}

if (staffEmploymentType) {
  staffEmploymentType.addEventListener('change', () => {
    syncLocumRateField();
  });
}

syncLocumRateField();

if (employeeSignInForm) {
  employeeSignInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const identifier = employeeId?.value?.trim();
    const password = employeePassword?.value?.trim();
    if (!identifier || !password) {
      setMessage(employeeSignInMessage, t('staff.messages.employeeRequired'));
      return;
    }
    const employees = loadEmployees();
    const match = employees.find(
      (emp) =>
        (emp.code === identifier || emp.email === identifier) && emp.password === password
    );
    if (!match) {
      setMessage(employeeSignInMessage, t('staff.messages.employeeNotFound'));
      return;
    }
    currentEmployee = match;
    setMessage(employeeSignInMessage, '');
    applyRoleAccess();
    showView('dashboard');
  });
}

if (addConsultationBtn) {
  addConsultationBtn.addEventListener('click', () => {
    const cost = parseNumber(consultationCost?.value);
    if (!cost) {
      setMessage(patientMessage, t('billing.consultationRequired'));
      return;
    }
    if (!billingTableBody) return;
    const row = createBillingRow();
    const itemInput = row.querySelector('input[type="text"]');
    if (itemInput) itemInput.value = t('billing.consultationItem');
    const categorySelect = row.querySelector('select');
    if (categorySelect) categorySelect.value = 'consultation';
    const priceInput = row.querySelector('.billing-price');
    if (priceInput) priceInput.value = cost;
    const qtyInput = row.querySelector('.billing-qty');
    if (qtyInput) qtyInput.value = 1;
    billingTableBody.appendChild(row);
    updateBillingTotals();
    setMessage(patientMessage, t('billing.consultAdded'));
  });
}

if (savePatientBtn) {
  savePatientBtn.addEventListener('click', () => {
    const name = patientFullName?.value?.trim();
    const sex = patientSex?.value || '';
    const dob = patientDob?.value || '';
    const age = patientAge?.value || '';
    const address = patientAddress?.value?.trim() || '';
    const phone = patientPhone?.value?.trim() || '';
    const emergency = patientEmergencyPhone?.value?.trim() || '';
    const whatsapp = patientWhatsapp?.value?.trim() || '';
    const profession = patientProfession?.value || '';
    const education = patientEducation?.value || '';
    const insuranceType = insuranceProvider?.value || '';
    const identifier = patientIdentifier?.value?.trim() || '';
    const insuranceIdValue = insuranceId?.value?.trim() || '';
    const coverage = coverageRate?.value || '';
    const patientType = document.querySelector('input[name="patientType"]:checked')?.value || 'new';
    const hasDobOrAge = Boolean(dob || age);
    if (
      patientType === 'new' &&
      (!name ||
        !sex ||
        !hasDobOrAge ||
        !address ||
        !phone ||
        !emergency ||
        !whatsapp ||
        !profession ||
        !education ||
        !insuranceType ||
        !identifier)
    ) {
      setMessage(patientMessage, t('billing.patientRequired'));
      return;
    }
    const record = {
      name,
      sex,
      dob,
      age,
      address,
      phone,
      emergency,
      whatsapp,
      profession,
      education,
      insuranceType,
      insuranceId: insuranceIdValue,
      coverage,
      identifier,
      doctor: assignDoctor?.value || '',
      admittedBy: currentEmployee?.name || currentEmployee?.code || '',
      createdAt: new Date().toISOString(),
    };
    const list = loadPatients();
    list.push(record);
    savePatients(list);
    setMessage(patientMessage, t('billing.patientSaved'));
    refreshDashboardIfVisible();
  });
}

if (patientSearch) {
  patientSearch.addEventListener('input', () => {
    const query = patientSearch.value;
    if (!query || query.length < 2) return;
    const match = searchPatients(query);
    if (match) {
      fillPatientForm(match);
      setMessage(patientMessage, t('billing.patientLoaded'));
    }
  });
}

if (addPricingRule) {
  addPricingRule.addEventListener('click', () => {
    const provider = normalizeProvider(pricingProvider?.value);
    const code = pricingCode?.value?.trim() || '';
    const label = pricingLabel?.value?.trim() || '';
    const price = parseNumber(pricingPrice?.value);
    const base = parseNumber(pricingBase?.value);
    if (!provider || !label) {
      setMessage(pricingMessage, t('billing.pricingRequired'));
      return;
    }
    const rules = loadPricing();
    rules.push({
      id: `PR-${Date.now()}`,
      provider,
      code,
      label,
      price,
      base,
    });
    savePricing(rules);
    if (pricingProvider) pricingProvider.value = '';
    if (pricingCode) pricingCode.value = '';
    if (pricingLabel) pricingLabel.value = '';
    if (pricingPrice) pricingPrice.value = '';
    if (pricingBase) pricingBase.value = '';
    setMessage(pricingMessage, t('billing.pricingSaved'));
    renderPricingTable();
  });
}

if (pricingTableBody) {
  pricingTableBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains('remove-row')) return;
    const id = target.dataset.id;
    if (!id) return;
    const rules = loadPricing().filter((rule) => rule.id !== id);
    savePricing(rules);
    renderPricingTable();
  });
}

if (createAppointmentBtn) {
  createAppointmentBtn.addEventListener('click', () => {
    const patientName = appointmentPatient?.value?.trim();
    const phone = appointmentPhone?.value?.trim() || '';
    const doctor = appointmentDoctor?.value || '';
    const doctorName = appointmentDoctor?.selectedOptions?.[0]?.textContent || '';
    const service = appointmentService?.value || '';
    const serviceLabel = appointmentService?.selectedOptions?.[0]?.textContent || '';
    const date = appointmentDate?.value || '';
    const time = appointmentTime?.value || '';
    const notes = appointmentNotes?.value?.trim() || '';
    if (!patientName || !doctor || !date || !time) {
      setMessage(appointmentsMessage, t('appointments.required'));
      return;
    }
    const appointments = loadAppointments();
    appointments.push({
      id: `AP-${Date.now()}`,
      patientName,
      phone,
      doctor,
      doctorName,
      service,
      serviceLabel,
      date,
      time,
      notes,
      status: 'scheduled',
      createdAt: new Date().toISOString(),
    });
    saveAppointments(appointments);
    if (appointmentPatient) appointmentPatient.value = '';
    if (appointmentPhone) appointmentPhone.value = '';
    if (appointmentDoctor) appointmentDoctor.value = '';
    if (appointmentService) appointmentService.value = '';
    if (appointmentDate) appointmentDate.value = '';
    if (appointmentTime) appointmentTime.value = '';
    if (appointmentNotes) appointmentNotes.value = '';
    setMessage(appointmentsMessage, t('appointments.saved'));
    renderAppointmentsTable();
    refreshDashboardIfVisible();
  });
}

if (appointmentsTableBody) {
  appointmentsTableBody.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) return;
    if (!target.classList.contains('appointment-status')) return;
    const row = target.closest('tr');
    const id = row?.dataset.id;
    if (!id) return;
    const appointments = loadAppointments();
    const match = appointments.find((appt) => appt.id === id);
    if (match) {
      match.status = target.value;
      saveAppointments(appointments);
      refreshDashboardIfVisible();
    }
  });
  appointmentsTableBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains('remove-row')) return;
    const id = target.dataset.id;
    if (!id) return;
    const appointments = loadAppointments().filter((appt) => appt.id !== id);
    saveAppointments(appointments);
    renderAppointmentsTable();
    refreshDashboardIfVisible();
  });
}

if (copyPortalLink) {
  copyPortalLink.addEventListener('click', async () => {
    const link = appointmentsPortalLink?.value || '';
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setMessage(appointmentsMessage, t('appointments.copied'));
    } catch (error) {
      setMessage(appointmentsMessage, link);
    }
  });
}

if (addStockBtn) {
  addStockBtn.addEventListener('click', () => {
    const name = stockName?.value?.trim();
    const unitPrice = parseNumber(stockPrice?.value);
    const qty = parseNumber(stockQty?.value);
    const min = parseNumber(stockMin?.value);
    if (!name) {
      setMessage(inventoryMessage, t('inventory.required'));
      return;
    }
    const receiptName = stockReceipt?.files?.[0]?.name || '';
    const stock = loadStock();
    stock.push({
      id: `ST-${Date.now()}`,
      name,
      unitPrice,
      qty,
      min,
      entryDate: stockEntryDate?.value || '',
      expiryDate: stockExpiryDate?.value || '',
      receiptName,
    });
    saveStock(stock);
    if (stockName) stockName.value = '';
    if (stockPrice) stockPrice.value = '';
    if (stockQty) stockQty.value = '';
    if (stockMin) stockMin.value = '';
    if (stockEntryDate) stockEntryDate.value = '';
    if (stockExpiryDate) stockExpiryDate.value = '';
    if (stockReceipt) stockReceipt.value = '';
    setMessage(inventoryMessage, t('inventory.saved'));
    renderStockTable();
  });
}

if (stockTableBody) {
  stockTableBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const row = target.closest('tr');
    const id = row?.dataset.id;
    if (!id) return;
    if (target.classList.contains('stock-save')) {
      const stock = loadStock();
      const item = stock.find((entry) => entry.id === id);
      if (!item) return;
      item.qty = parseNumber(row.querySelector('.stock-qty')?.value);
      item.min = parseNumber(row.querySelector('.stock-min')?.value);
      item.unitPrice = parseNumber(row.querySelector('.stock-price')?.value);
      saveStock(stock);
      renderStockTable();
      return;
    }
    if (target.classList.contains('remove-row')) {
      const stock = loadStock().filter((entry) => entry.id !== id);
      saveStock(stock);
      renderStockTable();
    }
  });
}

if (addPurchaseOrderBtn) {
  addPurchaseOrderBtn.addEventListener('click', () => {
    const supplier = poSupplier?.value?.trim() || '';
    const item = poItem?.value?.trim() || '';
    const qty = parseNumber(poQty?.value);
    const date = poDate?.value || '';
    if (!supplier || !item || !qty) {
      setMessage(poMessage, t('inventory.poRequired'));
      return;
    }
    const orders = loadPurchaseOrders();
    orders.push({
      id: `PO-${Date.now()}`,
      supplier,
      item,
      qty,
      date,
      status: 'open',
    });
    savePurchaseOrders(orders);
    if (poSupplier) poSupplier.value = '';
    if (poItem) poItem.value = '';
    if (poQty) poQty.value = '';
    if (poDate) poDate.value = '';
    setMessage(poMessage, t('inventory.poSaved'));
    renderPurchaseOrders();
  });
}

if (poTableBody) {
  poTableBody.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) return;
    if (!target.classList.contains('po-status')) return;
    const row = target.closest('tr');
    const id = row?.dataset.id;
    if (!id) return;
    const orders = loadPurchaseOrders();
    const match = orders.find((order) => order.id === id);
    if (match) {
      match.status = target.value;
      savePurchaseOrders(orders);
    }
  });
  poTableBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains('remove-row')) return;
    const id = target.dataset.id;
    if (!id) return;
    const orders = loadPurchaseOrders().filter((order) => order.id !== id);
    savePurchaseOrders(orders);
    renderPurchaseOrders();
  });
}

function downloadPayslipFile(doctor) {
  const payslip = calculateDoctorPayslip(doctor);
  const now = new Date();
  const content = [
    `MediTrack Payslip`,
    `Doctor: ${doctor.name || doctor.code || doctor.email}`,
    `Period: ${now.toLocaleDateString()}`,
    `Service count: ${payslip.serviceCount}`,
    `Gross service fee: ${formatCfl(payslip.gross)}`,
    `OTR deduction: ${formatCfl(payslip.otr)}`,
    `Net payment: ${formatCfl(payslip.net)}`,
  ].join('\n');
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `payslip-${doctor.code || doctor.name || 'doctor'}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

if (downloadPayslip) {
  downloadPayslip.addEventListener('click', () => {
    if (!currentEmployee) return;
    downloadPayslipFile(currentEmployee);
  });
}

if (payslipTableBody) {
  payslipTableBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains('payslip-download')) return;
    const id = target.dataset.id;
    const doctors = loadEmployees().filter((emp) => emp.role === 'doctor');
    const doctor = doctors.find((doc) => (doc.code || doc.email || doc.name) === id);
    if (doctor) {
      downloadPayslipFile(doctor);
    }
  });
}

function formatDate(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString();
}

function formatTime(value = new Date()) {
  if (!(value instanceof Date)) return '';
  return value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function splitName(fullName) {
  if (!fullName) return { first: '', last: '' };
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: '' };
  const first = parts.shift();
  return { first, last: parts.join(' ') };
}

function generateReceiptNumber() {
  return `RC-${Date.now().toString().slice(-6)}`;
}

function fillReceipt() {
  if (!receiptPanel) return;
  const now = new Date();
  const name = patientFullName?.value?.trim() || '';
  const { first, last } = splitName(name);
  const coverage = parseNumber(coverageRate?.value);
  receiptFacility.textContent =
    currentFacilityProfile?.name || currentFacility || 'MediTrack';
  receiptNumber.textContent = generateReceiptNumber();
  receiptCashier.textContent = currentEmployee?.name || currentEmployee?.code || 'Admission';
  receiptDate.textContent = now.toLocaleDateString();
  receiptTime.textContent = formatTime(now);
  receiptClientCode.textContent = patientPhone?.value || patientWhatsapp?.value || '-';
  receiptLastName.textContent = last || name || '-';
  receiptFirstName.textContent = first || '-';
  receiptAddress.textContent = patientAddress?.value || '-';
  receiptInsurer.textContent = document.getElementById('insuranceProvider')?.value || '-';
  receiptSex.textContent = patientSex?.value || '-';
  receiptDob.textContent = formatDate(patientDob?.value) || '-';
  receiptProfession.textContent = patientProfession?.value || '-';
  receiptPhone.textContent = patientPhone?.value || '-';
  receiptCoverage.textContent = coverage ? `${coverage}%` : '-';
  receiptPolicy.textContent = document.getElementById('insuranceId')?.value || '-';

  receiptTableBody.innerHTML = '';
  let totalInsurance = 0;
  let totalPatient = 0;
  const items = [];
  billingTableBody.querySelectorAll('tr').forEach((row) => {
    const item = row.querySelector('input[type="text"]')?.value || '';
    const code = row.querySelector('.billing-code')?.value || '';
    const inam = row.querySelector('.billing-inam')?.value || '';
    const category = row.querySelector('select')?.value || '';
    const qty = parseNumber(row.querySelector('.billing-qty')?.value);
    const price = parseNumber(row.querySelector('.billing-price')?.value);
    const baseUnit = parseNumber(row.querySelector('.billing-base')?.value);
    const actualInput = row.querySelector('.billing-actual');
    const lineTotal = qty * price;
    if (!item && !lineTotal) return;
    const baseTotalRaw = qty * baseUnit;
    const baseTotal = baseTotalRaw > 0 ? Math.min(baseTotalRaw, lineTotal) : lineTotal;
    const insurance = coverage ? baseTotal * (coverage / 100) : 0;
    const calculatedPatient = Math.max(0, baseTotal - insurance);
    const actualDefault = Math.max(0, calculatedPatient + Math.max(0, lineTotal - baseTotal));
    let patient = actualDefault;
    const actualValue = parseNumber(actualInput?.value);
    if (actualInput && actualValue > 0) {
      patient = actualValue;
    }
    totalInsurance += insurance;
    totalPatient += patient;
    items.push({
      label: item,
      category,
      qty,
      price,
      total: lineTotal,
      base: baseTotal,
      insurance,
      patient,
      calculatedPatient,
      code,
      inam,
    });
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item || '-'}</td>
      <td>${code || '-'}</td>
      <td>${inam || '-'}</td>
      <td>${qty || '-'}</td>
      <td>${formatCfl(price)}</td>
      <td>${coverage ? `${coverage}%` : '-'}</td>
      <td>${formatCfl(lineTotal)}</td>
      <td>${formatCfl(insurance)}</td>
      <td>${formatCfl(patient)}</td>
    `;
    receiptTableBody.appendChild(tr);
  });
  receiptTotalNet.textContent = formatCfl(totalPatient);
  receiptTotalInsurance.textContent = formatCfl(totalInsurance);
  receiptPanel.classList.remove('hidden');
  if (printReceiptBtn) printReceiptBtn.disabled = false;

  const receipts = loadReceipts();
  receipts.push({
    id: receiptNumber.textContent,
    createdAt: now.toISOString(),
    total: totalInsurance + totalPatient,
    insuranceTotal: totalInsurance,
    patientTotal: totalPatient,
    items,
    doctor: assignDoctor?.value || '',
    doctorName: assignDoctor?.selectedOptions?.[0]?.textContent || '',
    admittedBy: currentEmployee?.name || currentEmployee?.code || '',
  });
  saveReceipts(receipts);
  applyStockDeductions(items);
  renderReports();
  refreshDashboardIfVisible();
}

if (generateReceiptBtn) {
  generateReceiptBtn.addEventListener('click', () => {
    fillReceipt();
  });
}

if (printReceiptBtn) {
  printReceiptBtn.addEventListener('click', () => {
    window.print();
  });
}

applyTranslations();
setAuthMode('signin');
showView('welcome');
