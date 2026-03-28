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
const clinicalRecordsView = document.getElementById('clinicalRecordsView');
const labModuleView = document.getElementById('labModuleView');
const hrPayrollView = document.getElementById('hrPayrollView');
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
const backToModulesFromRecords = document.getElementById('backToModulesFromRecords');
const backToModulesFromLab = document.getElementById('backToModulesFromLab');
const backToModulesFromHr = document.getElementById('backToModulesFromHr');
const billingTableBody = document.getElementById('billingTableBody');
const addBillingRow = document.getElementById('addBillingRow');
const removeLastBillingRow = document.getElementById('removeLastBillingRow');
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
const serviceCatalogCode = document.getElementById('serviceCatalogCode');
const serviceCatalogInamCode = document.getElementById('serviceCatalogInamCode');
const serviceCatalogUninsuredPrice = document.getElementById('serviceCatalogUninsuredPrice');
const serviceCatalogMessage = document.getElementById('serviceCatalogMessage');
const serviceCatalogTable = document.getElementById('serviceCatalogTable');
const serviceCatalogEmpty = document.getElementById('serviceCatalogEmpty');
const serviceInsurancePrice = document.getElementById('serviceInsurancePrice');
const serviceInsuranceBase = document.getElementById('serviceInsuranceBase');
const serviceInsuranceTable = document.getElementById('serviceInsuranceTable');
const serviceInsuranceEmpty = document.getElementById('serviceInsuranceEmpty');
const cancelServiceEdit = document.getElementById('cancelServiceEdit');
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

const patientFirstName = document.getElementById('patientFirstName');
const patientLastName = document.getElementById('patientLastName');
const patientSex = document.getElementById('patientSex');
const patientDob = document.getElementById('patientDob');
const patientAge = document.getElementById('patientAge');
const patientCountry = document.getElementById('patientCountry');
const patientCity = document.getElementById('patientCity');
const patientDistrict = document.getElementById('patientDistrict');
const patientPostalCode = document.getElementById('patientPostalCode');
const patientPhoneCountry = document.getElementById('patientPhoneCountry');
const patientPhone = document.getElementById('patientPhone');
const patientWhatsappCountry = document.getElementById('patientWhatsappCountry');
const patientWhatsapp = document.getElementById('patientWhatsapp');
const patientProfession = document.getElementById('patientProfession');
const patientEducation = document.getElementById('patientEducation');
const patientInsuranceStatus = document.getElementById('patientInsuranceStatus');
const insuranceDetails = document.getElementById('insuranceDetails');
const insuranceExpiry = document.getElementById('insuranceExpiry');
const paymentMethod = document.getElementById('paymentMethod');
const patientStatusLabel = document.getElementById('patientStatusLabel');
const assignDoctor = document.getElementById('assignDoctor');
const createNewPatientBtn = document.getElementById('createNewPatientBtn');
const patientSearchResults = document.getElementById('patientSearchResults');
const patientSearchMessage = document.getElementById('patientSearchMessage');
const savePatientBtn = document.getElementById('savePatientBtn');
const provideServicesBtn = document.getElementById('provideServicesBtn');
const patientMessage = document.getElementById('patientMessage');
const patientSearch = document.getElementById('patientSearch');

const backToBillingFromServices = document.getElementById('backToBillingFromServices');
const addSelectedServices = document.getElementById('addSelectedServices');
const clearServiceSelection = document.getElementById('clearServiceSelection');
const serviceSelectionMessage = document.getElementById('serviceSelectionMessage');
const serviceSelectionCategoryFilter = document.getElementById('serviceSelectionCategoryFilter');
const serviceSelectionSearch = document.getElementById('serviceSelectionSearch');
const serviceSelectionTableBody = document.getElementById('serviceSelectionTableBody');
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
const stockType = document.getElementById('stockType');
const stockSupplier = document.getElementById('stockSupplier');
const stockPrice = document.getElementById('stockPrice');
const stockQty = document.getElementById('stockQty');
const stockMin = document.getElementById('stockMin');
const stockEntryDate = document.getElementById('stockEntryDate');
const stockExpiryDate = document.getElementById('stockExpiryDate');
const stockReceipt = document.getElementById('stockReceipt');
const stockNotes = document.getElementById('stockNotes');
const addStockBtn = document.getElementById('addStockBtn');
const stockTableBody = document.getElementById('stockTableBody');
const stockMovementTableBody = document.getElementById('stockMovementTableBody');
const inventoryTotalProducts = document.getElementById('inventoryTotalProducts');
const inventoryLowAlerts = document.getElementById('inventoryLowAlerts');
const inventoryExpiringAlerts = document.getElementById('inventoryExpiringAlerts');
const inventoryOpenOrders = document.getElementById('inventoryOpenOrders');
const inventoryMessage = document.getElementById('inventoryMessage');
const poSupplier = document.getElementById('poSupplier');
const poItem = document.getElementById('poItem');
const poType = document.getElementById('poType');
const poQty = document.getElementById('poQty');
const poUnitCost = document.getElementById('poUnitCost');
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
const insuranceReportInsurer = document.getElementById('insuranceReportInsurer');
const insuranceReportStart = document.getElementById('insuranceReportStart');
const insuranceReportEnd = document.getElementById('insuranceReportEnd');
const insuranceReportGenerateBtn = document.getElementById('insuranceReportGenerateBtn');
const insuranceReportEmailBtn = document.getElementById('insuranceReportEmailBtn');
const insuranceReportBordereauBtn = document.getElementById('insuranceReportBordereauBtn');
const insuranceReportPdfBtn = document.getElementById('insuranceReportPdfBtn');
const insuranceReportDownloadBtn = document.getElementById('insuranceReportDownloadBtn');
const insuranceReportLetterBtn = document.getElementById('insuranceReportLetterBtn');
const insuranceReportMessage = document.getElementById('insuranceReportMessage');
const insuranceReportClaimsCount = document.getElementById('insuranceReportClaimsCount');
const insuranceReportReceiptsCount = document.getElementById('insuranceReportReceiptsCount');
const insuranceReportPatientsCount = document.getElementById('insuranceReportPatientsCount');
const insuranceReportBilledTotal = document.getElementById('insuranceReportBilledTotal');
const insuranceReportAmountDue = document.getElementById('insuranceReportAmountDue');
const insuranceReportPatientPart = document.getElementById('insuranceReportPatientPart');
const insuranceReportPaidTotal = document.getElementById('insuranceReportPaidTotal');
const insuranceReportBalance = document.getElementById('insuranceReportBalance');
const insuranceReportStatus = document.getElementById('insuranceReportStatus');
const insuranceReportStatusSelect = document.getElementById('insuranceReportStatusSelect');
const insuranceReportUpdateStatusBtn = document.getElementById('insuranceReportUpdateStatusBtn');
const insuranceReportTableBody = document.getElementById('insuranceReportTableBody');
const insuranceReportPaymentAmount = document.getElementById('insuranceReportPaymentAmount');
const insuranceReportPaymentDate = document.getElementById('insuranceReportPaymentDate');
const insuranceReportPaymentMethod = document.getElementById('insuranceReportPaymentMethod');
const insuranceReportPaymentReference = document.getElementById('insuranceReportPaymentReference');
const insuranceReportPaymentNote = document.getElementById('insuranceReportPaymentNote');
const insuranceReportRecordPaymentBtn = document.getElementById('insuranceReportRecordPaymentBtn');
const insuranceReportPaymentHistoryBody = document.getElementById('insuranceReportPaymentHistoryBody');
const insuranceReceivablesOpenCount = document.getElementById('insuranceReceivablesOpenCount');
const insuranceReceivablesOutstandingTotal = document.getElementById('insuranceReceivablesOutstandingTotal');
const insuranceReceivablesOverdueCount = document.getElementById('insuranceReceivablesOverdueCount');
const insuranceReceivablesReminderCount = document.getElementById('insuranceReceivablesReminderCount');
const insuranceReceivablesTableBody = document.getElementById('insuranceReceivablesTableBody');
const insuranceReportHistoryBody = document.getElementById('insuranceReportHistoryBody');

const dashboardRoleLabel = document.getElementById('dashboardRoleLabel');
const dashboardOverviewSection = document.getElementById('dashboardOverviewSection');
const dashboardOverviewSubtitle = document.getElementById('dashboardOverviewSubtitle');
const dashboardTrendMetric = document.getElementById('dashboardTrendMetric');
const dashboardDailyCards = document.getElementById('dashboardDailyCards');
const dashboardMonthlyCards = document.getElementById('dashboardMonthlyCards');
const dashboardCategoryTable = document.getElementById('dashboardCategoryTable');
const dashboardServiceTable = document.getElementById('dashboardServiceTable');
const dashboardMonthlyTrendChart = document.getElementById('dashboardMonthlyTrendChart');
const dashboardYearlyTrendChart = document.getElementById('dashboardYearlyTrendChart');
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
const nurseEncounterSelect = document.getElementById('nurseEncounterSelect');
const nurseHospitalizationMode = document.getElementById('nurseHospitalizationMode');
const nurseTemperature = document.getElementById('nurseTemperature');
const nurseBpRight = document.getElementById('nurseBpRight');
const nurseBpLeft = document.getElementById('nurseBpLeft');
const nurseWeight = document.getElementById('nurseWeight');
const nurseHeight = document.getElementById('nurseHeight');
const nurseWaist = document.getElementById('nurseWaist');
const nursePulse = document.getElementById('nursePulse');
const nurseRoomNumber = document.getElementById('nurseRoomNumber');
const nurseBedNumber = document.getElementById('nurseBedNumber');
const nurseCareNotes = document.getElementById('nurseCareNotes');
const nurseStockItem = document.getElementById('nurseStockItem');
const nurseStockQty = document.getElementById('nurseStockQty');
const addNurseSupplyBtn = document.getElementById('addNurseSupplyBtn');
const nurseSupplyList = document.getElementById('nurseSupplyList');
const saveNurseAssessmentBtn = document.getElementById('saveNurseAssessmentBtn');
const nurseAssessmentMessage = document.getElementById('nurseAssessmentMessage');

const labPending = document.getElementById('labPending');
const labInProgress = document.getElementById('labInProgress');
const labCompleted = document.getElementById('labCompleted');

const radioScheduled = document.getElementById('radioScheduled');
const radioCompleted = document.getElementById('radioCompleted');

const pharmacyPending = document.getElementById('pharmacyPending');
const pharmacyDispensed = document.getElementById('pharmacyDispensed');
const pharmacyAlerts = document.getElementById('pharmacyAlerts');
const pharmacyQueueTable = document.getElementById('pharmacyQueueTable');

const accRevenue = document.getElementById('accRevenue');
const accPatient = document.getElementById('accPatient');
const accInsurance = document.getElementById('accInsurance');
const accOutstanding = document.getElementById('accOutstanding');
const accCashPayments = document.getElementById('accCashPayments');
const accBankPayments = document.getElementById('accBankPayments');
const accDoctorPayments = document.getElementById('accDoctorPayments');

const dirPatients = document.getElementById('dirPatients');
const dirServices = document.getElementById('dirServices');
const dirRevenue = document.getElementById('dirRevenue');
const dirStaffProductivity = document.getElementById('dirStaffProductivity');
const adminStaffCount = document.getElementById('adminStaffCount');
const adminServiceCatalogCount = document.getElementById('adminServiceCatalogCount');
const adminInsurancePartnersCount = document.getElementById('adminInsurancePartnersCount');
const adminTodayAdmissions = document.getElementById('adminTodayAdmissions');
const adminRoleMixTable = document.getElementById('adminRoleMixTable');
const hrStaffTotal = document.getElementById('hrStaffTotal');
const hrPermanentTotal = document.getElementById('hrPermanentTotal');
const hrLocumTotal = document.getElementById('hrLocumTotal');
const hrPayrollEstimate = document.getElementById('hrPayrollEstimate');
const hrRoleMixTable = document.getElementById('hrRoleMixTable');
const hrPayrollPeriod = document.getElementById('hrPayrollPeriod');
const hrPayrollFilter = document.getElementById('hrPayrollFilter');
const hrPayrollTotalEmployees = document.getElementById('hrPayrollTotalEmployees');
const hrPayrollTotalDue = document.getElementById('hrPayrollTotalDue');
const hrPayrollTotalPaid = document.getElementById('hrPayrollTotalPaid');
const hrPayrollTotalOutstanding = document.getElementById('hrPayrollTotalOutstanding');
const hrPayrollTableBody = document.getElementById('hrPayrollTableBody');
const hrEmployeeSummaryGrid = document.getElementById('hrEmployeeSummaryGrid');
const hrPayrollBasisGrid = document.getElementById('hrPayrollBasisGrid');
const hrPaymentMethod = document.getElementById('hrPaymentMethod');
const hrPaymentAmount = document.getElementById('hrPaymentAmount');
const hrPaymentNote = document.getElementById('hrPaymentNote');
const recordPayrollPaymentBtn = document.getElementById('recordPayrollPaymentBtn');
const downloadPayrollStatementBtn = document.getElementById('downloadPayrollStatementBtn');
const hrPayrollMessage = document.getElementById('hrPayrollMessage');
const hrPaymentHistoryBody = document.getElementById('hrPaymentHistoryBody');

const clinicalPatientSearch = document.getElementById('clinicalPatientSearch');
const clinicalPatientResults = document.getElementById('clinicalPatientResults');
const clinicalPatientMessage = document.getElementById('clinicalPatientMessage');
const clinicalSelectedPatientName = document.getElementById('clinicalSelectedPatientName');
const clinicalSelectedPatientMeta = document.getElementById('clinicalSelectedPatientMeta');
const clinicalSelectedPatientStats = document.getElementById('clinicalSelectedPatientStats');
const clinicalIdentityGrid = document.getElementById('clinicalIdentityGrid');
const clinicalSocioGrid = document.getElementById('clinicalSocioGrid');
const clinicalAntecedents = document.getElementById('clinicalAntecedents');
const clinicalNotes = document.getElementById('clinicalNotes');
const saveClinicalHistoryBtn = document.getElementById('saveClinicalHistoryBtn');
const clinicalHistoryMessage = document.getElementById('clinicalHistoryMessage');
const clinicalEncounterTable = document.getElementById('clinicalEncounterTable');
const clinicalNurseTable = document.getElementById('clinicalNurseTable');
const clinicalDoctorTable = document.getElementById('clinicalDoctorTable');
const clinicalExamRequestsTable = document.getElementById('clinicalExamRequestsTable');
const clinicalExamRequestSelect = document.getElementById('clinicalExamRequestSelect');
const clinicalExamStatus = document.getElementById('clinicalExamStatus');
const clinicalExamResult = document.getElementById('clinicalExamResult');
const clinicalExamComment = document.getElementById('clinicalExamComment');
const saveClinicalExamResultBtn = document.getElementById('saveClinicalExamResultBtn');
const clinicalExamMessage = document.getElementById('clinicalExamMessage');
const clinicalResultsTable = document.getElementById('clinicalResultsTable');
const clinicalPrescriptionTable = document.getElementById('clinicalPrescriptionTable');
const clinicalBillingTable = document.getElementById('clinicalBillingTable');
const labRequestSearch = document.getElementById('labRequestSearch');
const labStatusFilter = document.getElementById('labStatusFilter');
const labRequestMessage = document.getElementById('labRequestMessage');
const labRequestSummaryGrid = document.getElementById('labRequestSummaryGrid');
const openLabPatientRecordBtn = document.getElementById('openLabPatientRecordBtn');
const labRequestsTableBody = document.getElementById('labRequestsTableBody');
const labResultStatus = document.getElementById('labResultStatus');
const labResultText = document.getElementById('labResultText');
const labResultComment = document.getElementById('labResultComment');
const labStockItem = document.getElementById('labStockItem');
const labStockQty = document.getElementById('labStockQty');
const addLabSupplyBtn = document.getElementById('addLabSupplyBtn');
const labSupplyList = document.getElementById('labSupplyList');
const saveLabResultBtn = document.getElementById('saveLabResultBtn');
const validateLabResultBtn = document.getElementById('validateLabResultBtn');
const labResultMessage = document.getElementById('labResultMessage');
const labHistoryTableBody = document.getElementById('labHistoryTableBody');
const labModuleRequested = document.getElementById('labModuleRequested');
const labModuleEligible = document.getElementById('labModuleEligible');
const labModuleValidated = document.getElementById('labModuleValidated');

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
const staffFirstName = document.getElementById('staffFirstName');
const staffLastName = document.getElementById('staffLastName');
const staffRole = document.getElementById('staffRole');
const staffEmail = document.getElementById('staffEmail');
const staffPhoneCountry = document.getElementById('staffPhoneCountry');
const staffPhone = document.getElementById('staffPhone');
const staffCode = document.getElementById('staffCode');
const staffTempPassword = document.getElementById('staffTempPassword');
const staffMessage = document.getElementById('staffMessage');
const staffListBody = document.getElementById('staffListBody');
const doctorFields = document.getElementById('doctorFields');
const staffEmploymentType = document.getElementById('staffEmploymentType');
const staffLocumRate = document.getElementById('staffLocumRate');
const staffDob = document.getElementById('staffDob');
const staffSex = document.getElementById('staffSex');
const staffContractStart = document.getElementById('staffContractStart');
const staffPosition = document.getElementById('staffPosition');
const staffStatus = document.getElementById('staffStatus');
const staffPayMode = document.getElementById('staffPayMode');
const staffContractSalary = document.getElementById('staffContractSalary');
const staffEmployeeSocialRate = document.getElementById('staffEmployeeSocialRate');
const staffEmployerSocialRate = document.getElementById('staffEmployerSocialRate');
const staffOtherDeductions = document.getElementById('staffOtherDeductions');
const staffSocialId = document.getElementById('staffSocialId');
const staffNotes = document.getElementById('staffNotes');
const doctorSex = document.getElementById('doctorSex');
const doctorAge = document.getElementById('doctorAge');
const doctorReg = document.getElementById('doctorReg');
const doctorTax = document.getElementById('doctorTax');
const doctorSpecialty = document.getElementById('doctorSpecialty');
const doctorFee = document.getElementById('doctorFee');
const doctorOtr = document.getElementById('doctorOtr');
const doctorEncounterSelect = document.getElementById('doctorEncounterSelect');
const doctorPrescriptionType = document.getElementById('doctorPrescriptionType');
const doctorComplaint = document.getElementById('doctorComplaint');
const doctorSymptoms = document.getElementById('doctorSymptoms');
const doctorExamSummary = document.getElementById('doctorExamSummary');
const doctorDiagnosis1 = document.getElementById('doctorDiagnosis1');
const doctorDiagnosis2 = document.getElementById('doctorDiagnosis2');
const doctorDiagnosis3 = document.getElementById('doctorDiagnosis3');
const doctorTests = document.getElementById('doctorTests');
const doctorStockItem = document.getElementById('doctorStockItem');
const doctorStockQty = document.getElementById('doctorStockQty');
const addDoctorMedicationBtn = document.getElementById('addDoctorMedicationBtn');
const doctorMedicationList = document.getElementById('doctorMedicationList');
const saveDoctorConsultationBtn = document.getElementById('saveDoctorConsultationBtn');
const doctorConsultationMessage = document.getElementById('doctorConsultationMessage');
const doctorPatientSummary = document.getElementById('doctorPatientSummary');
const doctorLabResultsTable = document.getElementById('doctorLabResultsTable');

let currentLang = 'en';
let currentFacility = null;
let currentFacilityProfile = null;
let currentEmployee = null;
let staffAccessMode = null;
let pendingServiceInsurance = [];
let pendingDoctorMedication = [];
let pendingNurseSupplies = [];
let pendingLabSupplies = [];
let activePatientId = null;
let activeAppointmentId = '';
let activeClinicalPatientId = null;
let editingServiceId = null;
let pendingDashboardEncounterId = '';
let activeLabRequestId = '';
let activePayrollEmployeeId = '';
let activeInsuranceStatementId = '';

const COUNTRY_CODES = [
  { code: '+228', label: 'Togo (+228)' },
  { code: '+41', label: 'Switzerland (+41)' },
  { code: '+33', label: 'France (+33)' },
  { code: '+44', label: 'United Kingdom (+44)' },
  { code: '+1', label: 'United States (+1)' },
  { code: '+221', label: 'Senegal (+221)' },
  { code: '+225', label: "Cote d'Ivoire (+225)" },
  { code: '+227', label: 'Niger (+227)' },
  { code: '+229', label: 'Benin (+229)' },
  { code: '+234', label: 'Nigeria (+234)' },
];

const SERVICE_CATEGORY_DEFINITIONS = [
  { value: 'accouchement', en: 'Delivery', fr: 'Accouchement' },
  { value: 'acte_gynecologique', en: 'Gynecological procedure', fr: 'Acte gynécologique' },
  { value: 'anatomie_pathologique', en: 'Pathology', fr: 'Anatomie-pathologique' },
  { value: 'bacteriologie', en: 'Bacteriology', fr: 'Bactériologie' },
  { value: 'biochimie', en: 'Biochemistry', fr: 'Biochimie' },
  { value: 'biologie_moleculaire', en: 'Molecular biology', fr: 'Biologie moléculaire' },
  { value: 'certificat_medical', en: 'Medical certificate', fr: 'Certificat médical' },
  { value: 'chirurgie', en: 'Surgery', fr: 'Chirurgie' },
  { value: 'consultation_bucco_dentaire', en: 'Dental consultation', fr: 'Consultation bucco-dentaire' },
  { value: 'consultation_mg', en: 'General practice consultation', fr: 'Consultation MG' },
  { value: 'consultation_sf', en: 'Midwife consultation', fr: 'Consultation SF' },
  { value: 'consultation_specialiste', en: 'Specialist consultation', fr: 'Consultation spécialiste' },
  { value: 'consultation_visite', en: 'Consultation / visit', fr: 'Consultation-visite' },
  { value: 'echographie', en: 'Ultrasound', fr: 'Échographie' },
  { value: 'electrocardiogramme', en: 'Electrocardiogram', fr: 'Électrocardiogramme' },
  { value: 'endoscopie', en: 'Endoscopy', fr: 'Endoscopie' },
  { value: 'expertise_dentaire', en: 'Dental expertise', fr: 'Expertise dentaire' },
  { value: 'hematologie', en: 'Hematology', fr: 'Hématologie' },
  { value: 'hospitalisation', en: 'Hospitalization', fr: 'Hospitalisation' },
  { value: 'imagerie_interventionnelle', en: 'Interventional imaging', fr: 'Imagerie interventionnelle' },
  { value: 'immuno_serologie', en: 'Immuno-serology', fr: 'Immuno-sérologie' },
  { value: 'irm', en: 'MRI', fr: 'IRM' },
  { value: 'location_bloc', en: 'Operating room rental', fr: 'Location bloc' },
  { value: 'mycologie', en: 'Mycology', fr: 'Mycologie' },
  { value: 'orl', en: 'ENT', fr: 'ORL' },
  { value: 'parasitologie', en: 'Parasitology', fr: 'Parasitologie' },
  { value: 'pharmacie', en: 'Pharmacy', fr: 'Pharmacie' },
  { value: 'radiologie', en: 'Radiology', fr: 'Radiologie' },
  { value: 'scanner', en: 'CT scan', fr: 'Scanner' },
  { value: 'soins_chirurgie_bucco_dentaire', en: 'Dental surgery care', fr: 'Soins chirurgie bucco-dentaire' },
  { value: 'vaccination', en: 'Vaccination', fr: 'Vaccination' },
];

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

function populateCountryCodeSelect(select, defaultCode = '+228') {
  if (!select) return;
  select.innerHTML = '';
  COUNTRY_CODES.forEach((entry) => {
    const option = document.createElement('option');
    option.value = entry.code;
    option.textContent = entry.label;
    select.appendChild(option);
  });
  select.value = defaultCode;
}

function calculateAgeFromDob(value) {
  if (!value) return '';
  const dob = new Date(value);
  if (Number.isNaN(dob.getTime())) return '';
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age -= 1;
  }
  return age >= 0 ? age : '';
}

function joinPhone(countryCode, number) {
  const local = (number || '').trim();
  if (!local) return '';
  return `${countryCode || ''}${local}`;
}

function fullPatientName(record) {
  return [record?.firstName, record?.lastName].filter(Boolean).join(' ').trim() || record?.name || '';
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

function getEncountersKey() {
  if (currentFacility) {
    return `meditrack_encounters_${currentFacility}`;
  }
  return 'meditrack_encounters_default';
}

function loadEncounters() {
  try {
    const raw = localStorage.getItem(getEncountersKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveEncounters(list) {
  try {
    localStorage.setItem(getEncountersKey(), JSON.stringify(list));
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

function getAccountingKey() {
  if (currentFacility) {
    return `meditrack_accounting_${currentFacility}`;
  }
  return 'meditrack_accounting_default';
}

function loadAccountingEntries() {
  try {
    const raw = localStorage.getItem(getAccountingKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveAccountingEntries(list) {
  try {
    localStorage.setItem(getAccountingKey(), JSON.stringify(list));
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

function getInsuranceStatementsKey() {
  if (currentFacility) {
    return `meditrack_insurance_statements_${currentFacility}`;
  }
  return 'meditrack_insurance_statements_default';
}

function loadInsuranceStatements() {
  try {
    const raw = localStorage.getItem(getInsuranceStatementsKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveInsuranceStatements(list) {
  try {
    localStorage.setItem(getInsuranceStatementsKey(), JSON.stringify(list));
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

function getServiceCategoryDefinitions() {
  return SERVICE_CATEGORY_DEFINITIONS.map((item) => ({
    value: item.value,
    label: currentLang === 'fr' ? item.fr : item.en,
  }));
}

function populateServiceCategoryOptions() {
  const categories = getServiceCategoryDefinitions();
  if (serviceCatalogCategory) {
    const currentValue = serviceCatalogCategory.value;
    serviceCatalogCategory.innerHTML = `<option value="">${t('select.placeholder')}</option>`;
    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category.value;
      option.textContent = category.label;
      serviceCatalogCategory.appendChild(option);
    });
    serviceCatalogCategory.value = currentValue || '';
  }
  if (serviceSelectionCategoryFilter) {
    const currentValue = serviceSelectionCategoryFilter.value;
    serviceSelectionCategoryFilter.innerHTML = `
      <option value="">${t('services.allCategories')}</option>
    `;
    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category.value;
      option.textContent = category.label;
      serviceSelectionCategoryFilter.appendChild(option);
    });
    serviceSelectionCategoryFilter.value = currentValue || '';
  }
}

function buildInsurancePricingDraft(existingEntries = []) {
  const insurers = seedInsurancePartnersIfEmpty();
  const byPartner = new Map(
    existingEntries.map((entry) => [normalizeProvider(entry.partner), entry])
  );
  return insurers.map((partner) => {
    const existing = byPartner.get(normalizeProvider(partner.name));
    return {
      partner: partner.name,
      price: existing?.price ?? '',
      base: existing?.base ?? '',
    };
  });
}

function renderServiceInsuranceTable() {
  if (!serviceInsuranceTable) return;
  if (!pendingServiceInsurance.length) {
    pendingServiceInsurance = buildInsurancePricingDraft();
  }
  serviceInsuranceTable.innerHTML = '';
  pendingServiceInsurance.forEach((entry) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${entry.partner}</td>
      <td>
        <input
          type="number"
          min="0"
          step="1"
          class="service-insurance-price"
          data-partner="${entry.partner}"
          value="${entry.price !== '' ? entry.price : ''}"
        />
      </td>
      <td>
        <input
          type="number"
          min="0"
          step="1"
          class="service-insurance-base"
          data-partner="${entry.partner}"
          value="${entry.base !== '' ? entry.base : ''}"
        />
      </td>
    `;
    serviceInsuranceTable.appendChild(row);
  });
  if (serviceInsuranceEmpty) {
    serviceInsuranceEmpty.textContent = pendingServiceInsurance.length
      ? ''
      : t('serviceCatalog.insuranceEmpty');
  }
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

function formatDateInputValue(value) {
  if (!value) return '';
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function getDefaultInsuranceStatementPeriod() {
  const now = new Date();
  return {
    start: formatDateInputValue(new Date(now.getFullYear(), now.getMonth(), 1)),
    end: formatDateInputValue(now),
  };
}

function getDefaultInsuranceStatementPaymentDate() {
  return formatDateInputValue(new Date());
}

function getInsuranceStatementSelectableStatuses() {
  return ['generated', 'sent', 'rejected', 'disputed'];
}

function normalizeInsuranceStatementStatus(status) {
  const value = String(status || '').trim().toLowerCase();
  const aliases = {
    draft: 'generated',
    generated: 'generated',
    sent: 'sent',
    transmitted: 'sent',
    settled: 'paid',
    paid: 'paid',
    partial: 'partially_paid',
    partially_paid: 'partially_paid',
    partiallypaid: 'partially_paid',
    rejected: 'rejected',
    disputed: 'disputed',
    litige: 'disputed',
  };
  return aliases[value] || value || 'generated';
}

function getInsuranceStatementSelectableStatus(statement) {
  if (!statement) return 'generated';
  const candidate = normalizeInsuranceStatementStatus(statement.manualStatus || statement.status || 'generated');
  if (getInsuranceStatementSelectableStatuses().includes(candidate)) return candidate;
  return statement.transmittedAt ? 'sent' : 'generated';
}

function normalizeInsuranceStatementPayment(payment, index = 0, statementId = '') {
  return {
    id: payment?.id || `${statementId || 'ISR'}-PAY-${index + 1}`,
    amount: parseNumber(payment?.amount),
    paymentDate: formatDateInputValue(payment?.paymentDate || payment?.createdAt || new Date()),
    paymentMethod: payment?.paymentMethod || payment?.method || 'bank_transfer',
    reference: payment?.reference || '',
    note: payment?.note || '',
    createdAt: payment?.createdAt || new Date().toISOString(),
    createdBy: payment?.createdBy || payment?.recordedBy || '',
  };
}

function normalizeInsuranceStatementReminder(reminder, index = 0, statementId = '') {
  const sentAt = reminder?.sentAt || reminder?.createdAt || new Date().toISOString();
  return {
    id: reminder?.id || `${statementId || 'ISR'}-REM-${index + 1}`,
    sentAt,
    method: reminder?.method || 'email',
    note: reminder?.note || '',
    createdBy: reminder?.createdBy || reminder?.recordedBy || '',
  };
}

function getFacilityBranding() {
  const fallbackLogo =
    currentFacilityProfile?.logo ||
    receiptLogoImg?.src ||
    facilityLogoImg?.src ||
    document.querySelector('.logo-img')?.src ||
    '';
  return {
    name: currentFacilityProfile?.name || currentFacility || 'MediTrack',
    code: currentFacilityProfile?.code || currentFacility || '',
    email: currentFacilityProfile?.email || '',
    phone: currentFacilityProfile?.phone || '',
    city: currentFacilityProfile?.city || '',
    country: currentFacilityProfile?.country || '',
    address: currentFacilityProfile?.address || '',
    logo: fallbackLogo,
  };
}

function buildFacilityPrintHeaderHtml(title, subtitle = '') {
  const facility = getFacilityBranding();
  const locationLine = [facility.city, facility.country].filter(Boolean).join(', ');
  const contacts = [facility.address, locationLine, facility.phone, facility.email].filter(Boolean);
  const logoMarkup = facility.logo
    ? `<div class="print-brand-logo"><img src="${escapeHtml(facility.logo)}" alt="${escapeHtml(
        facility.name
      )}" /></div>`
    : '';
  return `
    <header class="print-brand">
      ${logoMarkup}
      <div class="print-brand-copy">
        <p class="print-brand-tag">${escapeHtml(facility.code || 'MEDITRACK')}</p>
        <h1>${escapeHtml(title)}</h1>
        ${subtitle ? `<p class="print-brand-subtitle">${escapeHtml(subtitle)}</p>` : ''}
        <h2>${escapeHtml(facility.name)}</h2>
        ${contacts.length ? `<p>${escapeHtml(contacts.join(' · '))}</p>` : ''}
      </div>
    </header>
  `;
}

function getInsuranceStatementAgingDays(statement, referenceDate = new Date()) {
  const baseDate = parseDateValue(statement?.transmittedAt || statement?.createdAt || statement?.updatedAt);
  if (!baseDate || !(referenceDate instanceof Date)) return 0;
  const diff = referenceDate.getTime() - baseDate.getTime();
  return diff > 0 ? Math.floor(diff / 86400000) : 0;
}

function normalizeInsuranceStatement(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const id = raw.id || `ISR-${Date.now()}`;
  const rows = Array.isArray(raw.rows)
    ? raw.rows
        .map((row, index) => ({
          id: row?.id || `${id}-ROW-${index + 1}`,
          createdAt: row?.createdAt || raw.createdAt || '',
          receiptId: row?.receiptId || '',
          receiptNumber: row?.receiptNumber || row?.receiptId || '',
          encounterId: row?.encounterId || '',
          patientId: row?.patientId || '',
          patientName: row?.patientName || '',
          insurer: row?.insurer || raw.insurer || '',
          label: row?.label || row?.service || row?.name || '',
          code: row?.code || '',
          inam: row?.inam || '',
          qty: parseNumber(row?.qty) || 1,
          price: parseNumber(row?.price),
          base: parseNumber(row?.base),
          rate: parseNumber(row?.rate),
          total: parseNumber(row?.total) || (parseNumber(row?.qty) || 1) * parseNumber(row?.price),
          insuranceShare: parseNumber(row?.insuranceShare),
          patientShare: parseNumber(row?.patientShare),
          doctorName: row?.doctorName || row?.providerName || '',
          policy: row?.policy || '',
          category: row?.category || '',
        }))
        .filter((row) => row.insurer || row.total || row.insuranceShare || row.patientShare)
    : [];
  const receiptIds = new Set(rows.map((row) => row.receiptId).filter(Boolean));
  const patientIds = new Set(rows.map((row) => row.patientId).filter(Boolean));
  const rowTotals = rows.reduce(
    (acc, row) => {
      acc.billed += row.total || 0;
      acc.insurerShare += row.insuranceShare || 0;
      acc.patientShare += row.patientShare || 0;
      return acc;
    },
    { billed: 0, insurerShare: 0, patientShare: 0 }
  );
  const payments = Array.isArray(raw.payments)
    ? raw.payments
        .map((payment, index) => normalizeInsuranceStatementPayment(payment, index, id))
        .filter((payment) => payment.amount > 0)
        .sort((a, b) => new Date(a.paymentDate || a.createdAt || 0) - new Date(b.paymentDate || b.createdAt || 0))
    : [];
  const reminders = Array.isArray(raw.reminders)
    ? raw.reminders
        .map((reminder, index) => normalizeInsuranceStatementReminder(reminder, index, id))
        .sort((a, b) => new Date(b.sentAt || 0) - new Date(a.sentAt || 0))
    : [];
  const paidAmount = payments.reduce((sum, payment) => sum + (payment.amount || 0), 0);
  const amountDue = rowTotals.insurerShare;
  const balanceDue = Math.max(amountDue - paidAmount, 0);
  let manualStatus = normalizeInsuranceStatementStatus(raw.manualStatus || raw.status || 'generated');
  if (!getInsuranceStatementSelectableStatuses().includes(manualStatus)) {
    manualStatus = raw.transmittedAt ? 'sent' : 'generated';
  }
  const status = resolveInsuranceStatementStatus({
    manualStatus,
    paidAmount,
    amountDue,
    transmittedAt: raw.transmittedAt || '',
  });
  const lastPayment = payments.length ? payments[payments.length - 1] : null;
  const lastReminder = reminders.length ? reminders[0] : null;
  return {
    id,
    insurer: raw.insurer || '',
    insurerCode: raw.insurerCode || '',
    insurerEmail: raw.insurerEmail || '',
    insurerPhone: raw.insurerPhone || '',
    periodStart: raw.periodStart || '',
    periodEnd: raw.periodEnd || '',
    createdAt: raw.createdAt || new Date().toISOString(),
    updatedAt: raw.updatedAt || raw.createdAt || new Date().toISOString(),
    transmittedAt: raw.transmittedAt || '',
    settledAt:
      raw.settledAt ||
      (status === 'paid' && lastPayment ? lastPayment.createdAt || `${lastPayment.paymentDate}T12:00:00` : ''),
    transmissionMethod: raw.transmissionMethod || '',
    manualStatus,
    status,
    rows,
    payments,
    reminders,
    lastReminderAt: lastReminder?.sentAt || '',
    totals: {
      lineCount: rows.length,
      receiptCount: receiptIds.size,
      patientCount: patientIds.size,
      billed: rowTotals.billed,
      insurerShare: rowTotals.insurerShare,
      patientShare: rowTotals.patientShare,
      paidAmount,
      balanceDue,
      reminderCount: reminders.length,
    },
  };
}

function resetInsuranceStatementPaymentForm() {
  if (insuranceReportPaymentAmount) insuranceReportPaymentAmount.value = '';
  if (insuranceReportPaymentDate) insuranceReportPaymentDate.value = getDefaultInsuranceStatementPaymentDate();
  if (insuranceReportPaymentMethod) insuranceReportPaymentMethod.value = 'bank_transfer';
  if (insuranceReportPaymentReference) insuranceReportPaymentReference.value = '';
  if (insuranceReportPaymentNote) insuranceReportPaymentNote.value = '';
}

function renderInsurancePaymentHistory(statement) {
  if (!insuranceReportPaymentHistoryBody) return;
  insuranceReportPaymentHistoryBody.innerHTML = '';
  const payments = statement?.payments || [];
  if (!payments.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="6">${t('dashboard.noData')}</td>`;
    insuranceReportPaymentHistoryBody.appendChild(row);
    return;
  }
  payments.forEach((payment) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${escapeHtml(formatDate(payment.paymentDate) || '-')}</td>
      <td>${escapeHtml(formatPaymentMethodLabel(payment.paymentMethod))}</td>
      <td>${escapeHtml(payment.reference || '-')}</td>
      <td>${formatCfl(payment.amount || 0)}</td>
      <td>${escapeHtml(payment.note || '-')}</td>
      <td>${escapeHtml(payment.createdBy || '-')}</td>
    `;
    insuranceReportPaymentHistoryBody.appendChild(row);
  });
}

function clearInsuranceStatementPreview() {
  if (insuranceReportClaimsCount) insuranceReportClaimsCount.textContent = '0';
  if (insuranceReportReceiptsCount) insuranceReportReceiptsCount.textContent = '0';
  if (insuranceReportPatientsCount) insuranceReportPatientsCount.textContent = '0';
  if (insuranceReportBilledTotal) insuranceReportBilledTotal.textContent = formatCfl(0);
  if (insuranceReportAmountDue) insuranceReportAmountDue.textContent = formatCfl(0);
  if (insuranceReportPatientPart) insuranceReportPatientPart.textContent = formatCfl(0);
  if (insuranceReportPaidTotal) insuranceReportPaidTotal.textContent = formatCfl(0);
  if (insuranceReportBalance) insuranceReportBalance.textContent = formatCfl(0);
  if (insuranceReportStatus) insuranceReportStatus.textContent = '-';
  if (insuranceReportStatusSelect) insuranceReportStatusSelect.value = 'generated';
  if (insuranceReportTableBody) {
    insuranceReportTableBody.innerHTML = '';
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="13">${t('dashboard.noData')}</td>`;
    insuranceReportTableBody.appendChild(row);
  }
  renderInsurancePaymentHistory(null);
  resetInsuranceStatementPaymentForm();
}

function setInsuranceReportActionState(statement) {
  const hasStatement = !!statement && !!statement.rows?.length;
  if (insuranceReportEmailBtn) insuranceReportEmailBtn.disabled = !hasStatement;
  if (insuranceReportBordereauBtn) insuranceReportBordereauBtn.disabled = !hasStatement;
  if (insuranceReportPdfBtn) insuranceReportPdfBtn.disabled = !hasStatement;
  if (insuranceReportDownloadBtn) insuranceReportDownloadBtn.disabled = !hasStatement;
  if (insuranceReportLetterBtn) insuranceReportLetterBtn.disabled = !hasStatement;
  if (insuranceReportStatusSelect) insuranceReportStatusSelect.disabled = !hasStatement;
  if (insuranceReportUpdateStatusBtn) insuranceReportUpdateStatusBtn.disabled = !hasStatement;
  const allowPayment = hasStatement && (statement.totals?.balanceDue || 0) > 0;
  if (insuranceReportPaymentAmount) insuranceReportPaymentAmount.disabled = !allowPayment;
  if (insuranceReportPaymentDate) insuranceReportPaymentDate.disabled = !allowPayment;
  if (insuranceReportPaymentMethod) insuranceReportPaymentMethod.disabled = !allowPayment;
  if (insuranceReportPaymentReference) insuranceReportPaymentReference.disabled = !allowPayment;
  if (insuranceReportPaymentNote) insuranceReportPaymentNote.disabled = !allowPayment;
  if (insuranceReportRecordPaymentBtn) insuranceReportRecordPaymentBtn.disabled = !allowPayment;
}

function renderInsuranceStatementPreview(statement) {
  if (!statement) {
    clearInsuranceStatementPreview();
    setInsuranceReportActionState(null);
    return;
  }
  if (insuranceReportClaimsCount) insuranceReportClaimsCount.textContent = String(statement.totals?.lineCount || 0);
  if (insuranceReportReceiptsCount) insuranceReportReceiptsCount.textContent = String(statement.totals?.receiptCount || 0);
  if (insuranceReportPatientsCount) insuranceReportPatientsCount.textContent = String(statement.totals?.patientCount || 0);
  if (insuranceReportBilledTotal) insuranceReportBilledTotal.textContent = formatCfl(statement.totals?.billed || 0);
  if (insuranceReportAmountDue) insuranceReportAmountDue.textContent = formatCfl(statement.totals?.insurerShare || 0);
  if (insuranceReportPatientPart) insuranceReportPatientPart.textContent = formatCfl(statement.totals?.patientShare || 0);
  if (insuranceReportPaidTotal) insuranceReportPaidTotal.textContent = formatCfl(statement.totals?.paidAmount || 0);
  if (insuranceReportBalance) insuranceReportBalance.textContent = formatCfl(statement.totals?.balanceDue || 0);
  if (insuranceReportStatus) insuranceReportStatus.textContent = getInsuranceStatementStatusLabel(statement.status);
  if (insuranceReportStatusSelect) insuranceReportStatusSelect.value = getInsuranceStatementSelectableStatus(statement);
  if (insuranceReportTableBody) {
    insuranceReportTableBody.innerHTML = '';
    if (!statement.rows.length) {
      const row = document.createElement('tr');
      row.innerHTML = `<td colspan="13">${t('reports.noClaims')}</td>`;
      insuranceReportTableBody.appendChild(row);
    } else {
      statement.rows.forEach((rowData) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${escapeHtml(formatDate(rowData.createdAt) || '-')}</td>
          <td>${escapeHtml(rowData.receiptNumber || '-')}</td>
          <td>${escapeHtml(rowData.patientName || '-')}</td>
          <td>${escapeHtml(rowData.label || '-')}</td>
          <td>${escapeHtml(rowData.code || '-')}</td>
          <td>${escapeHtml(rowData.inam || '-')}</td>
          <td>${escapeHtml(String(rowData.qty || 1))}</td>
          <td>${formatCfl(rowData.base || 0)}</td>
          <td>${rowData.rate ? `${rowData.rate}%` : '-'}</td>
          <td>${formatCfl(rowData.total || 0)}</td>
          <td>${formatCfl(rowData.insuranceShare || 0)}</td>
          <td>${formatCfl(rowData.patientShare || 0)}</td>
          <td>${escapeHtml(rowData.doctorName || '-')}</td>
        `;
        insuranceReportTableBody.appendChild(row);
      });
    }
  }
  renderInsurancePaymentHistory(statement);
  setInsuranceReportActionState(statement);
}

function renderInsuranceStatementHistory() {
  if (!insuranceReportHistoryBody) return;
  const statements = loadInsuranceStatements().slice().sort(
    (a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)
  );
  insuranceReportHistoryBody.innerHTML = '';
  if (!statements.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="9">${t('dashboard.noData')}</td>`;
    insuranceReportHistoryBody.appendChild(row);
    return;
  }
  statements.forEach((statement) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${escapeHtml(statement.insurer || '-')}</td>
      <td>${escapeHtml(formatDate(statement.periodStart) || '-')} - ${escapeHtml(
        formatDate(statement.periodEnd) || '-'
      )}</td>
      <td>${escapeHtml(String(statement.totals?.lineCount || 0))}</td>
      <td>${formatCfl(statement.totals?.insurerShare || 0)}</td>
      <td>${formatCfl(statement.totals?.paidAmount || 0)}</td>
      <td>${formatCfl(statement.totals?.balanceDue || 0)}</td>
      <td><span class="pill">${escapeHtml(getInsuranceStatementStatusLabel(statement.status))}</span></td>
      <td>${escapeHtml(formatDate(statement.updatedAt || statement.createdAt) || '-')}</td>
      <td><button type="button" class="ghost insurance-report-load" data-statement-id="${escapeHtml(
        statement.id
      )}">${escapeHtml(t('reports.openStatement'))}</button></td>
    `;
    insuranceReportHistoryBody.appendChild(row);
  });
}

function renderInsuranceStatementsSection() {
  syncInsuranceReportFilters();
  const activeStatement = getInsuranceStatementById(activeInsuranceStatementId);
  renderInsuranceStatementPreview(activeStatement);
  renderInsuranceStatementHistory();
}

function buildInsuranceStatementEmail(statement) {
  const facility = currentFacilityProfile?.name || currentFacility || 'MediTrack';
  const subject = `${t('reports.emailSubject')} - ${facility} - ${statement.insurer} (${formatDate(
    statement.periodStart
  )} - ${formatDate(statement.periodEnd)})`;
  const body = [
    `${t('reports.emailGreeting')}`,
    '',
    `${t('reports.emailIntro')} ${facility}.`,
    `${t('reports.emailInsurer')}: ${statement.insurer}`,
    `${t('reports.emailPeriod')}: ${formatDate(statement.periodStart)} - ${formatDate(statement.periodEnd)}`,
    `${t('reports.emailClaims')}: ${statement.totals?.lineCount || 0}`,
    `${t('reports.emailAmountDue')}: ${formatCfl(statement.totals?.insurerShare || 0)}`,
    '',
    `${t('reports.emailAttachmentNote')}`,
    '',
    `${t('reports.emailClosing')}`,
  ].join('\n');
  return { subject, body };
}

function buildInsuranceReminderEmail(statement) {
  const facility = currentFacilityProfile?.name || currentFacility || 'MediTrack';
  const subject = `${t('reports.reminderSubject')} - ${statement.insurer} (${formatDate(statement.periodStart)} - ${formatDate(
    statement.periodEnd
  )})`;
  const body = [
    `${t('reports.emailGreeting')}`,
    '',
    `${t('reports.reminderIntro')} ${facility}.`,
    `${t('reports.emailInsurer')}: ${statement.insurer}`,
    `${t('reports.emailPeriod')}: ${formatDate(statement.periodStart)} - ${formatDate(statement.periodEnd)}`,
    `${t('reports.statementBalance')}: ${formatCfl(statement.totals?.balanceDue || 0)}`,
    `${t('reports.reminderLastTransmission')}: ${formatDate(statement.transmittedAt || statement.createdAt) || '-'}`,
    '',
    `${t('reports.reminderAttachmentNote')}`,
    '',
    `${t('reports.emailClosing')}`,
  ].join('\n');
  return { subject, body };
}

function openInsuranceStatementEmailDraft(statement) {
  if (!statement) return false;
  const partner = getInsuranceStatementPartner(statement.insurer);
  const email = partner?.email || statement.insurerEmail || '';
  if (!email) {
    setMessage(insuranceReportMessage, t('reports.insurerEmailMissing'));
    return false;
  }
  const draft = buildInsuranceStatementEmail(statement);
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(
    draft.body
  )}`;
  return true;
}

function openInsuranceReminderEmailDraft(statement) {
  if (!statement) return false;
  const partner = getInsuranceStatementPartner(statement.insurer);
  const email = partner?.email || statement.insurerEmail || '';
  if (!email) {
    setMessage(insuranceReportMessage, t('reports.reminderEmailMissing'));
    return false;
  }
  const draft = buildInsuranceReminderEmail(statement);
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(
    draft.body
  )}`;
  return true;
}

function csvEscape(value) {
  const stringValue = String(value ?? '');
  if (/[;\n"]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

function downloadBlobFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function openPrintableDocument(html, name = 'print') {
  const popup = window.open('', '_blank', 'noopener,noreferrer,width=1200,height=800');
  if (!popup) return false;
  popup.document.open();
  popup.document.write(html);
  popup.document.close();
  popup.focus();
  setTimeout(() => {
    popup.print();
  }, 300);
  return true;
}

function buildInsuranceStatementPdfHtml(statement, title = '', subtitle = '') {
  const reportTitle = title || t('reports.insuranceClaimsTitle');
  const header = buildFacilityPrintHeaderHtml(
    reportTitle,
    subtitle || `${statement.insurer} · ${formatDate(statement.periodStart)} - ${formatDate(statement.periodEnd)}`
  );
  const detailRows = statement.rows.length
    ? statement.rows
        .map(
          (row) => `
            <tr>
              <td>${escapeHtml(formatDate(row.createdAt) || '-')}</td>
              <td>${escapeHtml(row.receiptNumber || '-')}</td>
              <td>${escapeHtml(row.patientName || '-')}</td>
              <td>${escapeHtml(row.label || '-')}</td>
              <td>${escapeHtml(row.code || '-')}</td>
              <td>${escapeHtml(row.inam || '-')}</td>
              <td>${escapeHtml(String(row.qty || 1))}</td>
              <td>${formatCfl(row.base || 0)}</td>
              <td>${row.rate ? `${row.rate}%` : '-'}</td>
              <td>${formatCfl(row.total || 0)}</td>
              <td>${formatCfl(row.insuranceShare || 0)}</td>
              <td>${formatCfl(row.patientShare || 0)}</td>
              <td>${escapeHtml(row.doctorName || '-')}</td>
            </tr>
          `
        )
        .join('')
    : `<tr><td colspan="13">${escapeHtml(t('reports.noClaims'))}</td></tr>`;
  return `<!DOCTYPE html>
<html lang="${escapeHtml(currentLang || 'en')}">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(reportTitle)} - ${escapeHtml(statement.insurer || '')}</title>
    <style>
      body { font-family: Arial, sans-serif; color: #10213a; margin: 24px; }
      .print-brand { display: flex; gap: 18px; align-items: flex-start; margin-bottom: 24px; border-bottom: 2px solid #d8e1ee; padding-bottom: 16px; }
      .print-brand-logo img { width: 90px; max-height: 90px; object-fit: contain; border-radius: 16px; }
      .print-brand-tag { margin: 0 0 8px; font-size: 11px; letter-spacing: 0.22em; color: #285ea6; font-weight: 700; text-transform: uppercase; }
      .print-brand h1 { margin: 0 0 8px; font-size: 30px; }
      .print-brand h2 { margin: 0 0 8px; font-size: 18px; color: #285ea6; }
      .print-brand-subtitle, .print-brand p { margin: 0; color: #506683; }
      .meta-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 16px; }
      .meta-card, .summary-card { border: 1px solid #d8e1ee; border-radius: 16px; padding: 14px; background: #f8fbff; }
      .summary-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 18px 0 24px; }
      .summary-card span, .meta-card span { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #6c8098; margin-bottom: 6px; }
      .summary-card strong, .meta-card strong { font-size: 18px; }
      table { width: 100%; border-collapse: collapse; margin-top: 12px; }
      th, td { border: 1px solid #d8e1ee; padding: 8px; font-size: 12px; text-align: left; vertical-align: top; }
      th { background: #eef4ff; }
      .footer-note { margin-top: 18px; font-size: 11px; color: #6c8098; }
    </style>
  </head>
  <body>
    ${header}
    <section class="meta-grid">
      <div class="meta-card"><span>${escapeHtml(t('reports.insurerFilter'))}</span><strong>${escapeHtml(
        statement.insurer || '-'
      )}</strong></div>
      <div class="meta-card"><span>${escapeHtml(t('reports.statementStatus'))}</span><strong>${escapeHtml(
        getInsuranceStatementStatusLabel(statement.status)
      )}</strong></div>
      <div class="meta-card"><span>${escapeHtml(t('reports.periodStart'))}</span><strong>${escapeHtml(
        formatDate(statement.periodStart) || '-'
      )}</strong></div>
      <div class="meta-card"><span>${escapeHtml(t('reports.periodEnd'))}</span><strong>${escapeHtml(
        formatDate(statement.periodEnd) || '-'
      )}</strong></div>
    </section>
    <section class="summary-grid">
      <div class="summary-card"><span>${escapeHtml(t('reports.statementBilled'))}</span><strong>${escapeHtml(
        formatCfl(statement.totals?.billed || 0)
      )}</strong></div>
      <div class="summary-card"><span>${escapeHtml(t('reports.statementDue'))}</span><strong>${escapeHtml(
        formatCfl(statement.totals?.insurerShare || 0)
      )}</strong></div>
      <div class="summary-card"><span>${escapeHtml(t('reports.statementPatientShare'))}</span><strong>${escapeHtml(
        formatCfl(statement.totals?.patientShare || 0)
      )}</strong></div>
      <div class="summary-card"><span>${escapeHtml(t('reports.statementPaid'))}</span><strong>${escapeHtml(
        formatCfl(statement.totals?.paidAmount || 0)
      )}</strong></div>
      <div class="summary-card"><span>${escapeHtml(t('reports.statementBalance'))}</span><strong>${escapeHtml(
        formatCfl(statement.totals?.balanceDue || 0)
      )}</strong></div>
      <div class="summary-card"><span>${escapeHtml(t('reports.claimLines'))}</span><strong>${escapeHtml(
        String(statement.totals?.lineCount || 0)
      )}</strong></div>
    </section>
    <table>
      <thead>
        <tr>
          <th>${escapeHtml(t('reports.statementDate'))}</th>
          <th>${escapeHtml(t('reports.statementReceipt'))}</th>
          <th>${escapeHtml(t('reports.statementPatient'))}</th>
          <th>${escapeHtml(t('reports.statementService'))}</th>
          <th>${escapeHtml(t('reports.statementCode'))}</th>
          <th>${escapeHtml(t('reports.statementInam'))}</th>
          <th>${escapeHtml(t('reports.statementQty'))}</th>
          <th>${escapeHtml(t('reports.statementBase'))}</th>
          <th>${escapeHtml(t('reports.statementRate'))}</th>
          <th>${escapeHtml(t('reports.statementTotal'))}</th>
          <th>${escapeHtml(t('reports.statementInsuranceShare'))}</th>
          <th>${escapeHtml(t('reports.statementPatientShareColumn'))}</th>
          <th>${escapeHtml(t('reports.statementPrescriber'))}</th>
        </tr>
      </thead>
      <tbody>${detailRows}</tbody>
    </table>
    <p class="footer-note">${escapeHtml(t('reports.printGeneratedAt'))}: ${escapeHtml(
      formatDate(new Date().toISOString()) || '-'
    )}</p>
  </body>
</html>`;
}

function buildInsuranceBordereauHtml(statement) {
  const header = buildFacilityPrintHeaderHtml(
    t('reports.bordereauTitle'),
    `${statement.insurer} · ${formatDate(statement.periodStart)} - ${formatDate(statement.periodEnd)}`
  );
  const attachments = [
    t('reports.attachmentStatement'),
    t('reports.attachmentBordereau'),
    t('reports.attachmentExcel'),
    t('reports.attachmentLetter'),
  ];
  const attachmentRows = attachments
    .map(
      (label) => `<tr><td>${escapeHtml(label)}</td><td style="width:120px; text-align:center;">&#9633;</td></tr>`
    )
    .join('');
  return `<!DOCTYPE html>
<html lang="${escapeHtml(currentLang || 'en')}">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(t('reports.bordereauTitle'))}</title>
    <style>
      body { font-family: Arial, sans-serif; color: #10213a; margin: 24px; }
      .print-brand { display: flex; gap: 18px; align-items: flex-start; margin-bottom: 24px; border-bottom: 2px solid #d8e1ee; padding-bottom: 16px; }
      .print-brand-logo img { width: 90px; max-height: 90px; object-fit: contain; border-radius: 16px; }
      .print-brand-tag { margin: 0 0 8px; font-size: 11px; letter-spacing: 0.22em; color: #285ea6; font-weight: 700; text-transform: uppercase; }
      .print-brand h1 { margin: 0 0 8px; font-size: 30px; }
      .print-brand h2 { margin: 0 0 8px; font-size: 18px; color: #285ea6; }
      .print-brand-subtitle, .print-brand p { margin: 0; color: #506683; }
      .sheet { border: 1px solid #d8e1ee; border-radius: 18px; padding: 18px; background: #f8fbff; }
      .sheet-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-bottom: 20px; }
      .sheet-card { border: 1px solid #d8e1ee; border-radius: 16px; padding: 14px; background: white; }
      .sheet-card span { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #6c8098; margin-bottom: 6px; }
      .sheet-card strong { font-size: 18px; }
      table { width: 100%; border-collapse: collapse; margin-top: 12px; }
      th, td { border: 1px solid #d8e1ee; padding: 8px; font-size: 12px; text-align: left; }
      th { background: #eef4ff; }
      .signature { margin-top: 32px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; }
      .signature div { border-top: 1px solid #8898aa; padding-top: 10px; min-height: 48px; }
    </style>
  </head>
  <body>
    ${header}
    <div class="sheet">
      <div class="sheet-grid">
        <div class="sheet-card"><span>${escapeHtml(t('reports.insurerFilter'))}</span><strong>${escapeHtml(
          statement.insurer || '-'
        )}</strong></div>
        <div class="sheet-card"><span>${escapeHtml(t('reports.historyPeriod'))}</span><strong>${escapeHtml(
          `${formatDate(statement.periodStart) || '-'} - ${formatDate(statement.periodEnd) || '-'}`
        )}</strong></div>
        <div class="sheet-card"><span>${escapeHtml(t('reports.coveredPatients'))}</span><strong>${escapeHtml(
          String(statement.totals?.patientCount || 0)
        )}</strong></div>
        <div class="sheet-card"><span>${escapeHtml(t('reports.coveredReceipts'))}</span><strong>${escapeHtml(
          String(statement.totals?.receiptCount || 0)
        )}</strong></div>
        <div class="sheet-card"><span>${escapeHtml(t('reports.claimLines'))}</span><strong>${escapeHtml(
          String(statement.totals?.lineCount || 0)
        )}</strong></div>
        <div class="sheet-card"><span>${escapeHtml(t('reports.statementDue'))}</span><strong>${escapeHtml(
          formatCfl(statement.totals?.insurerShare || 0)
        )}</strong></div>
      </div>
      <table>
        <thead>
          <tr>
            <th>${escapeHtml(t('reports.bordereauLabel'))}</th>
            <th>${escapeHtml(t('reports.bordereauValue'))}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>${escapeHtml(t('reports.statementBilled'))}</td><td>${escapeHtml(
            formatCfl(statement.totals?.billed || 0)
          )}</td></tr>
          <tr><td>${escapeHtml(t('reports.statementPatientShare'))}</td><td>${escapeHtml(
            formatCfl(statement.totals?.patientShare || 0)
          )}</td></tr>
          <tr><td>${escapeHtml(t('reports.statementPaid'))}</td><td>${escapeHtml(
            formatCfl(statement.totals?.paidAmount || 0)
          )}</td></tr>
          <tr><td>${escapeHtml(t('reports.statementBalance'))}</td><td>${escapeHtml(
            formatCfl(statement.totals?.balanceDue || 0)
          )}</td></tr>
          <tr><td>${escapeHtml(t('reports.statementStatus'))}</td><td>${escapeHtml(
            getInsuranceStatementStatusLabel(statement.status)
          )}</td></tr>
        </tbody>
      </table>
      <h3>${escapeHtml(t('reports.attachmentsTitle'))}</h3>
      <table>
        <thead>
          <tr>
            <th>${escapeHtml(t('reports.attachmentDocument'))}</th>
            <th>${escapeHtml(t('reports.attachmentIncluded'))}</th>
          </tr>
        </thead>
        <tbody>${attachmentRows}</tbody>
      </table>
      <div class="signature">
        <div>${escapeHtml(t('reports.signaturePreparedBy'))}</div>
        <div>${escapeHtml(t('reports.signatureValidatedBy'))}</div>
      </div>
    </div>
  </body>
</html>`;
}

function exportInsuranceStatementPdf(statement) {
  if (!statement) return false;
  return openPrintableDocument(buildInsuranceStatementPdfHtml(statement), 'insurance-statement');
}

function exportInsuranceStatementBordereau(statement) {
  if (!statement) return false;
  return openPrintableDocument(buildInsuranceBordereauHtml(statement), 'insurance-bordereau');
}

function downloadInsuranceStatementExcel(statement) {
  if (!statement) return;
  const rows = statement.rows
    .map(
      (row) => `
        <tr>
          <td>${escapeHtml(formatDate(row.createdAt) || '-')}</td>
          <td>${escapeHtml(row.receiptNumber || '-')}</td>
          <td>${escapeHtml(row.patientName || '-')}</td>
          <td>${escapeHtml(row.label || '-')}</td>
          <td>${escapeHtml(row.code || '-')}</td>
          <td>${escapeHtml(row.inam || '-')}</td>
          <td>${escapeHtml(String(row.qty || 1))}</td>
          <td>${escapeHtml(String(row.base || 0))}</td>
          <td>${escapeHtml(row.rate ? `${row.rate}%` : '-')}</td>
          <td>${escapeHtml(String(row.total || 0))}</td>
          <td>${escapeHtml(String(row.insuranceShare || 0))}</td>
          <td>${escapeHtml(String(row.patientShare || 0))}</td>
          <td>${escapeHtml(row.doctorName || '-')}</td>
        </tr>
      `
    )
    .join('');
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <table border="1">
      <tr><th colspan="13">${escapeHtml(t('reports.insuranceClaimsTitle'))}</th></tr>
      <tr><td>${escapeHtml(t('reports.insurerFilter'))}</td><td colspan="12">${escapeHtml(
        statement.insurer || '-'
      )}</td></tr>
      <tr><td>${escapeHtml(t('reports.periodStart'))}</td><td>${escapeHtml(
        formatDate(statement.periodStart) || '-'
      )}</td><td>${escapeHtml(t('reports.periodEnd'))}</td><td>${escapeHtml(
        formatDate(statement.periodEnd) || '-'
      )}</td><td>${escapeHtml(t('reports.statementDue'))}</td><td>${escapeHtml(
        String(statement.totals?.insurerShare || 0)
      )}</td><td>${escapeHtml(t('reports.statementPaid'))}</td><td>${escapeHtml(
        String(statement.totals?.paidAmount || 0)
      )}</td><td>${escapeHtml(t('reports.statementBalance'))}</td><td>${escapeHtml(
        String(statement.totals?.balanceDue || 0)
      )}</td><td colspan="3"></td></tr>
      <tr>
        <th>${escapeHtml(t('reports.statementDate'))}</th>
        <th>${escapeHtml(t('reports.statementReceipt'))}</th>
        <th>${escapeHtml(t('reports.statementPatient'))}</th>
        <th>${escapeHtml(t('reports.statementService'))}</th>
        <th>${escapeHtml(t('reports.statementCode'))}</th>
        <th>${escapeHtml(t('reports.statementInam'))}</th>
        <th>${escapeHtml(t('reports.statementQty'))}</th>
        <th>${escapeHtml(t('reports.statementBase'))}</th>
        <th>${escapeHtml(t('reports.statementRate'))}</th>
        <th>${escapeHtml(t('reports.statementTotal'))}</th>
        <th>${escapeHtml(t('reports.statementInsuranceShare'))}</th>
        <th>${escapeHtml(t('reports.statementPatientShareColumn'))}</th>
        <th>${escapeHtml(t('reports.statementPrescriber'))}</th>
      </tr>
      ${rows}
    </table>
  </body>
</html>`;
  const blob = new Blob(['\ufeff', html], { type: 'application/vnd.ms-excel' });
  downloadBlobFile(
    blob,
    `insurance-statement-${normalizeProvider(statement.insurer || 'insurer')}-${statement.periodStart}-${statement.periodEnd}.xls`
  );
}

function buildInsuranceTransmissionLetterHtml(statement) {
  const header = buildFacilityPrintHeaderHtml(
    t('reports.transmittalTitle'),
    `${statement.insurer} · ${formatDate(statement.periodStart)} - ${formatDate(statement.periodEnd)}`
  );
  return `<!DOCTYPE html>
<html lang="${escapeHtml(currentLang || 'en')}">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(t('reports.transmittalTitle'))}</title>
    <style>
      body { font-family: Arial, sans-serif; color: #10213a; margin: 32px; line-height: 1.6; }
      .print-brand { display: flex; gap: 18px; align-items: flex-start; margin-bottom: 24px; border-bottom: 2px solid #d8e1ee; padding-bottom: 16px; }
      .print-brand-logo img { width: 90px; max-height: 90px; object-fit: contain; border-radius: 16px; }
      .print-brand-tag { margin: 0 0 8px; font-size: 11px; letter-spacing: 0.22em; color: #285ea6; font-weight: 700; text-transform: uppercase; }
      .print-brand h1 { margin: 0 0 8px; font-size: 30px; }
      .print-brand h2 { margin: 0 0 8px; font-size: 18px; color: #285ea6; }
      .print-brand-subtitle, .print-brand p { margin: 0; color: #506683; }
    </style>
  </head>
  <body>
    ${header}
    <p>${escapeHtml(t('reports.transmittalIntro'))}</p>
    <p><strong>${escapeHtml(t('reports.insurerFilter'))}:</strong> ${escapeHtml(statement.insurer || '-')}</p>
    <p><strong>${escapeHtml(t('reports.periodStart'))}:</strong> ${escapeHtml(
      formatDate(statement.periodStart) || '-'
    )}<br />
    <strong>${escapeHtml(t('reports.periodEnd'))}:</strong> ${escapeHtml(formatDate(statement.periodEnd) || '-')}</p>
    <p><strong>${escapeHtml(t('reports.claimLines'))}:</strong> ${escapeHtml(
      String(statement.totals?.lineCount || 0)
    )}<br />
    <strong>${escapeHtml(t('reports.statementDue'))}:</strong> ${escapeHtml(
      formatCfl(statement.totals?.insurerShare || 0)
    )}</p>
    <p>${escapeHtml(t('reports.transmittalBody'))}</p>
    <p>${escapeHtml(t('reports.emailClosing'))}</p>
  </body>
</html>`;
}

function downloadInsuranceTransmissionLetter(statement) {
  if (!statement) return;
  const blob = new Blob(['\ufeff', buildInsuranceTransmissionLetterHtml(statement)], {
    type: 'application/msword',
  });
  downloadBlobFile(
    blob,
    `insurance-transmittal-${normalizeProvider(statement.insurer || 'insurer')}-${statement.periodStart}-${statement.periodEnd}.doc`
  );
}

function updateInsuranceStatementStatus(statementId, status, transmissionMethod = '') {
  const statements = loadInsuranceStatements();
  const index = statements.findIndex((statement) => statement.id === statementId);
  if (index === -1) return null;
  const current = statements[index];
  const normalizedStatus = normalizeInsuranceStatementStatus(status);
  const selectable = getInsuranceStatementSelectableStatuses();
  const now = new Date().toISOString();
  const manualStatus = selectable.includes(normalizedStatus)
    ? normalizedStatus
    : current.manualStatus || getInsuranceStatementSelectableStatus(current);
  const nextStatement = normalizeInsuranceStatement({
    ...current,
    manualStatus,
    transmissionMethod: transmissionMethod || current.transmissionMethod || '',
    transmittedAt:
      manualStatus === 'sent'
        ? current.transmittedAt || now
        : manualStatus === 'generated'
          ? ''
          : current.transmittedAt || '',
    updatedAt: now,
  });
  statements[index] = nextStatement;
  saveInsuranceStatements(statements);
  activeInsuranceStatementId = statementId;
  return nextStatement;
}

function recordInsuranceStatementReminder(statementId, payload = {}) {
  const statements = loadInsuranceStatements();
  const index = statements.findIndex((statement) => statement.id === statementId);
  if (index === -1) return { error: 'missing_statement' };
  const statement = statements[index];
  const sentAt = new Date().toISOString();
  const reminder = normalizeInsuranceStatementReminder(
    {
      id: `INSREM-${Date.now()}`,
      sentAt,
      method: payload.method || 'email',
      note: payload.note || '',
      createdBy: currentEmployee?.name || currentEmployee?.code || '',
    },
    (statement.reminders || []).length,
    statement.id
  );
  const updated = normalizeInsuranceStatement({
    ...statement,
    reminders: [...(statement.reminders || []), reminder],
    manualStatus: statement.manualStatus === 'generated' ? 'sent' : statement.manualStatus,
    transmittedAt: statement.transmittedAt || sentAt,
    updatedAt: sentAt,
  });
  statements[index] = updated;
  saveInsuranceStatements(statements);
  activeInsuranceStatementId = updated.id;
  return { statement: updated, reminder };
}

function recordInsuranceStatementPayment(statementId, payload) {
  const statements = loadInsuranceStatements();
  const index = statements.findIndex((statement) => statement.id === statementId);
  if (index === -1) return { error: 'missing_statement' };
  const statement = statements[index];
  const amount = parseNumber(payload?.amount);
  if (!(amount > 0)) return { error: 'invalid_amount' };
  const balance = statement.totals?.balanceDue || 0;
  if (amount > balance + 0.01) return { error: 'exceeds_balance' };
  const paymentDate = formatDateInputValue(payload?.paymentDate || getDefaultInsuranceStatementPaymentDate());
  if (!paymentDate) return { error: 'missing_payment_date' };
  const paymentMethod = payload?.paymentMethod || 'bank_transfer';
  const createdAt = `${paymentDate}T12:00:00`;
  const payment = normalizeInsuranceStatementPayment(
    {
      id: `INSPAY-${Date.now()}`,
      amount,
      paymentDate,
      paymentMethod,
      reference: payload?.reference || '',
      note: payload?.note || '',
      createdAt,
      createdBy: currentEmployee?.name || currentEmployee?.code || '',
    },
    (statement.payments || []).length,
    statement.id
  );
  const updated = normalizeInsuranceStatement({
    ...statement,
    payments: [...(statement.payments || []), payment],
    updatedAt: new Date().toISOString(),
  });
  statements[index] = updated;
  saveInsuranceStatements(statements);
  const accountingEntries = loadAccountingEntries();
  accountingEntries.push({
    id: `ACC-INS-${Date.now()}`,
    entryType: 'insurance_payment',
    statementId: updated.id,
    insurer: updated.insurer || '',
    paymentMethod,
    cashAmount: paymentMethod === 'cash' ? amount : 0,
    bankAmount: paymentMethod === 'bank_transfer' ? amount : 0,
    insurerAmount: 0,
    insurerPaymentAmount: amount,
    totalAmount: amount,
    reference: payment.reference || '',
    note: payment.note || '',
    recordedBy: currentEmployee?.name || currentEmployee?.code || '',
    createdAt,
  });
  saveAccountingEntries(accountingEntries);
  activeInsuranceStatementId = updated.id;
  return { statement: updated, payment };
}

function getInsuranceReceivablesSummary(referenceDate = new Date()) {
  const statements = loadInsuranceStatements();
  const accountingEntries = loadAccountingEntries();
  const insurerPayments = accountingEntries
    .filter((entry) => entry.entryType === 'insurance_payment')
    .filter((entry) => isSameCalendarMonth(parseDateValue(entry.createdAt), referenceDate))
    .reduce((sum, entry) => sum + (entry.insurerPaymentAmount || entry.totalAmount || 0), 0);
  const openStatements = statements.filter((statement) => (statement.totals?.balanceDue || 0) > 0);
  const overdueStatements = openStatements.filter(
    (statement) => !['rejected', 'disputed'].includes(statement.status) && getInsuranceStatementAgingDays(statement, referenceDate) > 30
  );
  return {
    insurerPayments,
    outstanding: statements.reduce((sum, statement) => sum + (statement.totals?.balanceDue || 0), 0),
    openCount: openStatements.length,
    overdueCount: overdueStatements.length,
    reminderCount: statements.reduce((sum, statement) => sum + (statement.totals?.reminderCount || 0), 0),
  };
}

function renderInsuranceReceivablesSection() {
  if (!insuranceReceivablesTableBody) return;
  const now = new Date();
  const statements = loadInsuranceStatements()
    .slice()
    .sort((a, b) => (b.totals?.balanceDue || 0) - (a.totals?.balanceDue || 0));
  const summary = getInsuranceReceivablesSummary(now);
  if (insuranceReceivablesOpenCount) insuranceReceivablesOpenCount.textContent = String(summary.openCount || 0);
  if (insuranceReceivablesOutstandingTotal) {
    insuranceReceivablesOutstandingTotal.textContent = formatCfl(summary.outstanding || 0);
  }
  if (insuranceReceivablesOverdueCount) insuranceReceivablesOverdueCount.textContent = String(summary.overdueCount || 0);
  if (insuranceReceivablesReminderCount) insuranceReceivablesReminderCount.textContent = String(summary.reminderCount || 0);
  insuranceReceivablesTableBody.innerHTML = '';
  if (!statements.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="10">${t('dashboard.noData')}</td>`;
    insuranceReceivablesTableBody.appendChild(row);
    return;
  }
  statements.forEach((statement) => {
    const aging = getInsuranceStatementAgingDays(statement, now);
    const canRemind = (statement.totals?.balanceDue || 0) > 0 && !!(getInsuranceStatementPartner(statement.insurer)?.email || statement.insurerEmail);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${escapeHtml(statement.insurer || '-')}</td>
      <td>${escapeHtml(formatDate(statement.periodStart) || '-')} - ${escapeHtml(formatDate(statement.periodEnd) || '-')}</td>
      <td>${formatCfl(statement.totals?.insurerShare || 0)}</td>
      <td>${formatCfl(statement.totals?.paidAmount || 0)}</td>
      <td>${formatCfl(statement.totals?.balanceDue || 0)}</td>
      <td><span class="pill">${escapeHtml(getInsuranceStatementStatusLabel(statement.status))}</span></td>
      <td>${escapeHtml(formatDate(statement.transmittedAt || statement.createdAt) || '-')}</td>
      <td>${escapeHtml(formatDate(statement.lastReminderAt) || '-')}</td>
      <td>${escapeHtml(String(aging))}</td>
      <td>
        <div class="pill-row">
          <button type="button" class="ghost insurance-receivable-open" data-statement-id="${escapeHtml(statement.id)}">${escapeHtml(
            t('reports.openStatement')
          )}</button>
          <button type="button" class="ghost insurance-receivable-reminder" data-statement-id="${escapeHtml(
            statement.id
          )}" ${canRemind ? '' : 'disabled'}>${escapeHtml(t('reports.sendReminder'))}</button>
        </div>
      </td>
    `;
    insuranceReceivablesTableBody.appendChild(row);
  });
}

function getServiceCategoryLabel(category) {
  const normalizedCategory = normalizeServiceCategory(category);
  const match = getServiceCategoryDefinitions().find((item) => item.value === normalizedCategory);
  if (match) return match.label;
  const legacyMap = {
    consultation: currentLang === 'fr' ? 'Consultation spécialiste' : 'Specialist consultation',
    lab: currentLang === 'fr' ? 'Biochimie' : 'Biochemistry',
    imaging: currentLang === 'fr' ? 'Radiologie' : 'Radiology',
    hospitalization: currentLang === 'fr' ? 'Hospitalisation' : 'Hospitalization',
    surgery: currentLang === 'fr' ? 'Chirurgie' : 'Surgery',
    outpatient: currentLang === 'fr' ? 'Consultation-visite' : 'Consultation / visit',
    pharmacy: currentLang === 'fr' ? 'Pharmacie' : 'Pharmacy',
  };
  return legacyMap[normalizedCategory] || category;
}

function normalizeServiceCategory(value) {
  const normalized = String(value || '').trim().toLowerCase();
  const aliases = {
    hospital: 'hospitalisation',
    hospitalization: 'hospitalisation',
    hospitalisation: 'hospitalisation',
    surgery: 'chirurgie',
    consultation: 'consultation_specialiste',
    lab: 'biochimie',
    imaging: 'radiologie',
    outpatient: 'consultation_visite',
    pharmacy: 'pharmacie',
  };
  return aliases[normalized] || normalized || 'consultation_specialiste';
}

function findCatalogService(category, label, code = '') {
  const catalog = loadServiceCatalog();
  const normalizedCategory = normalizeServiceCategory(category);
  const normalizedLabel = normalizeLabel(label || '');
  const normalizedCode = normalizeLabel(code || '');
  return (
    catalog.find(
      (item) =>
        normalizeServiceCategory(item.category) === normalizedCategory &&
        (item.code || item.diseaseCode) &&
        normalizeLabel(item.code || item.diseaseCode) === normalizedCode
    ) ||
    catalog.find(
      (item) =>
        normalizeServiceCategory(item.category) === normalizedCategory &&
        normalizeLabel(item.name) === normalizedLabel
    )
  );
}

function resolveServicePricing(service, provider) {
  const catalogService = findCatalogService(service.category, service.label, service.code);
  if (!catalogService) {
    return {
      price: service.price || 0,
      base: service.base || '',
      code: service.code || '',
      inamCode: service.inam || '',
    };
  }
  const insurer = normalizeProvider(provider);
  const insurerPricing = (catalogService.insurancePricing || []).find(
    (item) => normalizeProvider(item.partner) === insurer
  );
  return {
    price: insurerPricing?.price ?? catalogService.uninsuredPrice ?? service.price ?? 0,
    base: insurerPricing?.base ?? '',
    code: catalogService.code || catalogService.diseaseCode || service.code || '',
    inamCode: catalogService.inamCode || service.inam || '',
  };
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
    const insurerRows =
      Array.isArray(service.insurancePricing) && service.insurancePricing.length
        ? service.insurancePricing
        : [{ partner: '-', price: '', base: '' }];
    insurerRows.forEach((entry) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${getServiceCategoryLabel(service.category)}</td>
        <td>${service.name || '-'}</td>
        <td>${service.code || service.diseaseCode || '-'}</td>
        <td>${service.inamCode || '-'}</td>
        <td>${formatCfl(service.uninsuredPrice || 0)}</td>
        <td>${entry.price !== '' ? formatCfl(entry.price || 0) : '-'}</td>
        <td>${entry.base !== '' ? formatCfl(entry.base || 0) : '-'}</td>
        <td>${entry.partner || '-'}</td>
        <td class="table-actions">
          <button class="ghost" type="button" data-service-edit="${service.id}">${t('serviceCatalog.edit')}</button>
          <button class="ghost" type="button" data-service-id="${service.id}">${t('serviceCatalog.delete')}</button>
        </td>
      `;
      serviceCatalogTable.appendChild(row);
    });
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


function getClinicalResultsKey() {
  if (currentFacility) {
    return `meditrack_clinical_results_${currentFacility}`;
  }
  return 'meditrack_clinical_results_default';
}

function loadClinicalResults() {
  try {
    const raw = localStorage.getItem(getClinicalResultsKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveClinicalResults(list) {
  try {
    localStorage.setItem(getClinicalResultsKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function normalizeStockType(value) {
  const normalized = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[\s/.-]+/g, '_');
  const aliases = {
    medication: 'medication',
    medicament: 'medication',
    pharmacy: 'medication',
    consumable: 'consumable',
    consommable: 'consumable',
    reagent: 'reagent',
    reactif: 'reagent',
    réactif: 'reagent',
    equipment: 'equipment',
    materiel: 'equipment',
    matériel: 'equipment',
    other: 'other',
    autre: 'other',
  };
  return aliases[normalized] || 'medication';
}

function normalizeStockRecord(item = {}) {
  return {
    id: item.id || `ST-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: item.name || item.item || '',
    type: normalizeStockType(item.type || item.category),
    supplier: item.supplier || '',
    unitPrice: parseNumber(item.unitPrice ?? item.price),
    qty: parseNumber(item.qty ?? item.quantity),
    min: parseNumber(item.min ?? item.minLevel),
    entryDate: item.entryDate || '',
    expiryDate: item.expiryDate || '',
    receiptName: item.receiptName || '',
    notes: item.notes || '',
    updatedAt: item.updatedAt || item.createdAt || '',
  };
}

function normalizePurchaseOrderRecord(order = {}) {
  const qtyOrdered = parseNumber(order.qtyOrdered ?? order.qty);
  const qtyReceived = parseNumber(order.qtyReceived);
  let status = order.status || 'open';
  if (qtyOrdered > 0) {
    if (qtyReceived >= qtyOrdered) {
      status = 'received';
    } else if (qtyReceived > 0) {
      status = 'partial';
    } else if (!status) {
      status = 'open';
    }
  }
  return {
    id: order.id || `PO-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    supplier: order.supplier || '',
    itemName: order.itemName || order.item || '',
    type: normalizeStockType(order.type),
    qtyOrdered,
    qtyReceived,
    unitCost: parseNumber(order.unitCost),
    expectedDate: order.expectedDate || order.date || '',
    receivedDate: order.receivedDate || '',
    status,
    receiptName: order.receiptName || '',
    stockItemId: order.stockItemId || '',
    notes: order.notes || '',
    createdAt: order.createdAt || '',
  };
}

function normalizeStockMovementRecord(entry = {}) {
  const qty = Math.abs(parseNumber(entry.qty));
  const unitCost = parseNumber(entry.unitCost ?? entry.unitPrice ?? entry.cost);
  return {
    id: entry.id || `STM-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    stockId: entry.stockId || '',
    item: entry.item || entry.name || '',
    itemType: normalizeStockType(entry.itemType || entry.type || entry.category),
    direction: entry.direction === 'in' ? 'in' : 'out',
    qty,
    unitCost,
    totalCost: parseNumber(entry.totalCost) || qty * unitCost,
    movementType: entry.movementType || (entry.direction === 'in' ? 'purchase' : 'consumption'),
    sourceModule: entry.sourceModule || entry.sourceRole || 'inventory',
    recordedBy: entry.recordedBy || '',
    supplier: entry.supplier || '',
    patientId: entry.patientId || '',
    encounterId: entry.encounterId || '',
    createdAt: entry.createdAt || new Date().toISOString(),
    note: entry.note || '',
  };
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
    return Array.isArray(data) ? data.map((entry) => normalizeStockRecord(entry)) : [];
  } catch (error) {
    return [];
  }
}

function saveStock(list) {
  try {
    localStorage.setItem(getStockKey(), JSON.stringify((list || []).map((entry) => normalizeStockRecord(entry))));
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
    return Array.isArray(data) ? data.map((entry) => normalizePurchaseOrderRecord(entry)) : [];
  } catch (error) {
    return [];
  }
}

function savePurchaseOrders(list) {
  try {
    localStorage.setItem(getPurchaseOrdersKey(), JSON.stringify((list || []).map((entry) => normalizePurchaseOrderRecord(entry))));
  } catch (error) {
    // ignore
  }
}

function getStockMovementsKey() {
  if (currentFacility) {
    return `meditrack_stock_movements_${currentFacility}`;
  }
  return 'meditrack_stock_movements_default';
}

function loadStockMovements() {
  try {
    const raw = localStorage.getItem(getStockMovementsKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data.map((entry) => normalizeStockMovementRecord(entry)) : [];
  } catch (error) {
    return [];
  }
}

function saveStockMovements(list) {
  try {
    localStorage.setItem(getStockMovementsKey(), JSON.stringify((list || []).map((entry) => normalizeStockMovementRecord(entry))));
  } catch (error) {
    // ignore
  }
}

function fillPatientForm(record) {
  if (!record) return;
  activePatientId = record.id || null;
  if (patientFirstName) patientFirstName.value = record.firstName || '';
  if (patientLastName) patientLastName.value = record.lastName || '';
  if (patientSex) patientSex.value = record.sex || '';
  if (patientDob) patientDob.value = record.dob || '';
  if (patientAge) patientAge.value = record.age || calculateAgeFromDob(record.dob) || '';
  if (patientCountry) patientCountry.value = record.address?.country || '';
  if (patientCity) patientCity.value = record.address?.city || '';
  if (patientDistrict) patientDistrict.value = record.address?.district || '';
  if (patientPostalCode) patientPostalCode.value = record.address?.postalCode || '';
  if (patientPhoneCountry) patientPhoneCountry.value = record.phoneCountryCode || '+228';
  if (patientPhone) patientPhone.value = record.phoneLocal || '';
  if (patientWhatsappCountry) patientWhatsappCountry.value = record.whatsappCountryCode || '+228';
  if (patientWhatsapp) patientWhatsapp.value = record.whatsappLocal || '';
  if (patientProfession) patientProfession.value = record.profession || '';
  if (patientEducation) patientEducation.value = record.education || '';
  if (patientInsuranceStatus) patientInsuranceStatus.value = record.isInsured ? 'yes' : 'no';
  if (assignDoctor) assignDoctor.value = record.doctor || '';
  if (insuranceProvider) insuranceProvider.value = record.insuranceType || '';
  if (insuranceId) insuranceId.value = record.insuranceId || '';
  if (coverageRate) coverageRate.value = record.coverage || '';
  if (insuranceExpiry) insuranceExpiry.value = record.insuranceExpiry || '';
  if (patientIdentifier) patientIdentifier.value = record.identifier || '';
  if (patientStatusLabel) patientStatusLabel.value = t('billing.returningPatient');
  toggleInsuranceDetails();
  maybeLinkAppointmentToCurrentPatient(record, { silent: true });
}

function searchPatients(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const patients = loadPatients();
  return patients.filter((patient) => {
    const haystacks = [
      fullPatientName(patient),
      patient.phone,
      patient.whatsapp,
      patient.identifier,
    ];
    return haystacks.some((value) => String(value || '').toLowerCase().includes(q));
  });
}

function clearPatientForm() {
  activePatientId = null;
  activeAppointmentId = '';
  if (patientFirstName) patientFirstName.value = '';
  if (patientLastName) patientLastName.value = '';
  if (patientSex) patientSex.value = '';
  if (patientDob) patientDob.value = '';
  if (patientAge) patientAge.value = '';
  if (patientCountry) patientCountry.value = '';
  if (patientCity) patientCity.value = '';
  if (patientDistrict) patientDistrict.value = '';
  if (patientPostalCode) patientPostalCode.value = '';
  if (patientPhoneCountry) patientPhoneCountry.value = '+228';
  if (patientPhone) patientPhone.value = '';
  if (patientWhatsappCountry) patientWhatsappCountry.value = '+228';
  if (patientWhatsapp) patientWhatsapp.value = '';
  if (patientProfession) patientProfession.value = '';
  if (patientEducation) patientEducation.value = '';
  if (patientInsuranceStatus) patientInsuranceStatus.value = 'no';
  if (assignDoctor) assignDoctor.value = '';
  if (insuranceProvider) insuranceProvider.value = '';
  if (insuranceId) insuranceId.value = '';
  if (coverageRate) coverageRate.value = '';
  if (insuranceExpiry) insuranceExpiry.value = '';
  if (patientIdentifier) patientIdentifier.value = '';
  if (patientStatusLabel) patientStatusLabel.value = t('billing.newPatient');
  toggleInsuranceDetails();
}

function renderPatientSearchResults(matches) {
  if (!patientSearchResults) return;
  patientSearchResults.innerHTML = '';
  if (!matches.length) {
    return;
  }
  matches.slice(0, 8).forEach((patient) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-result';
    button.dataset.patientId = patient.id || '';
    button.innerHTML = `
      <strong>${fullPatientName(patient) || '-'}</strong>
      <span>${patient.phone || patient.identifier || '-'}</span>
    `;
    patientSearchResults.appendChild(button);
  });
}

function toggleInsuranceDetails() {
  if (!insuranceDetails || !patientInsuranceStatus) return;
  const insured = patientInsuranceStatus.value === 'yes';
  insuranceDetails.classList.toggle('hidden', !insured);
}

function populateInsuranceProviderOptions() {
  if (!insuranceProvider) return;
  const currentValue = insuranceProvider.value;
  const insurers = seedInsurancePartnersIfEmpty();
  insuranceProvider.innerHTML = `<option value="">${t('select.placeholder')}</option>`;
  insurers.forEach((partner) => {
    const option = document.createElement('option');
    option.value = partner.name;
    option.textContent = partner.name;
    insuranceProvider.appendChild(option);
  });
  insuranceProvider.value = currentValue;
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
  const currentValue = appointmentDoctor.value;
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
  appointmentDoctor.value = currentValue;
}

function renderAppointmentsTable() {
  if (!appointmentsTableBody) return;
  const { appointments } = syncFacilityInterconnections();
  appointmentsTableBody.innerHTML = '';
  if (!appointments.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="7">${t('dashboard.noData')}</td>`;
    appointmentsTableBody.appendChild(row);
    return;
  }
  appointments
    .slice()
    .sort((a, b) => getAppointmentTimestamp(a) - getAppointmentTimestamp(b))
    .forEach((appt) => {
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
            <option value="arrived" ${appt.status === 'arrived' ? 'selected' : ''}>${t('appointments.statusArrived')}</option>
            <option value="in_care" ${appt.status === 'in_care' ? 'selected' : ''}>${t('appointments.statusInCare')}</option>
            <option value="completed" ${appt.status === 'completed' ? 'selected' : ''}>${t('appointments.statusCompleted')}</option>
            <option value="cancelled" ${appt.status === 'cancelled' ? 'selected' : ''}>${t('appointments.statusCancelled')}</option>
          </select>
        </td>
        <td>
          <button type="button" class="ghost appointment-open" data-id="${appt.id}" ${appt.status === 'cancelled' ? 'disabled' : ''}>${t('appointments.openAdmission')}</button>
          <button type="button" class="remove-row" data-id="${appt.id}">${t('billing.remove')}</button>
        </td>
      `;
      appointmentsTableBody.appendChild(row);
    });
}

function normalizePhoneComparable(value) {
  return String(value || '').replace(/\D+/g, '');
}

function normalizeAppointmentBucket(value) {
  const normalized = normalizeLabel(value || '').replace(/[\s/.-]+/g, '_');
  const aliases = {
    consultation: 'consultation',
    consult: 'consultation',
    lab: 'lab',
    laboratory: 'lab',
    imaging: 'imaging',
    radiology: 'imaging',
    hospital: 'hospitalization',
    hospitalization: 'hospitalization',
    surgery: 'surgery',
    outpatient: 'outpatient',
    pharmacy: 'pharmacy',
  };
  return aliases[normalized] || normalized;
}

function getAppointmentTimestamp(appointment) {
  if (!appointment) return Number.POSITIVE_INFINITY;
  const raw = `${appointment.date || ''}T${appointment.time || '00:00'}`;
  const parsed = new Date(raw);
  if (!Number.isFinite(parsed.getTime())) return Number.POSITIVE_INFINITY;
  return parsed.getTime();
}

function findPatientForAppointment(appointment, patients = loadPatients()) {
  if (!appointment) return null;
  const phone = normalizePhoneComparable(appointment.phone);
  const name = normalizeLabel(appointment.patientName || '');
  if (appointment.patientId) {
    const existing = patients.find((patient) => patient.id === appointment.patientId);
    if (existing) return existing;
  }
  if (phone) {
    const byPhone = patients.find((patient) => normalizePhoneComparable(patient.phone) === phone);
    if (byPhone) return byPhone;
  }
  if (!name) return null;
  return (
    patients.find((patient) => normalizeLabel(fullPatientName(patient)) === name) ||
    patients.find((patient) => {
      const full = normalizeLabel(fullPatientName(patient));
      return full.includes(name) || name.includes(full);
    }) ||
    null
  );
}

function appointmentMatchesEncounter(appointment, encounter) {
  if (!appointment || !encounter) return false;
  if (appointment.patientId && encounter.patientId && appointment.patientId !== encounter.patientId) return false;
  if (!appointment.patientId) {
    const patientName = normalizeLabel(appointment.patientName || '');
    if (patientName) {
      const encounterName = normalizeLabel(encounter.patientName || '');
      if (!(encounterName.includes(patientName) || patientName.includes(encounterName))) return false;
    }
  }
  if (appointment.doctor && encounter.doctor && appointment.doctor !== encounter.doctor) return false;
  const appointmentTs = getAppointmentTimestamp(appointment);
  const encounterDate = parseDateValue(encounter.createdAt);
  if (Number.isFinite(appointmentTs) && encounterDate) {
    const diff = Math.abs(encounterDate.getTime() - appointmentTs);
    if (diff > 7 * 24 * 60 * 60 * 1000) return false;
  }
  const bucket = normalizeAppointmentBucket(appointment.service || appointment.serviceLabel);
  if (bucket) {
    const matchesService = (encounter.services || []).some((item) => {
      const itemBucket = getDashboardCategoryBucket(item.category);
      const itemLabel = normalizeLabel(item.label || '');
      const appointmentLabel = normalizeLabel(appointment.serviceLabel || appointment.service || '');
      return itemBucket === bucket || (appointmentLabel && itemLabel.includes(appointmentLabel));
    });
    if (!matchesService && bucket !== 'consultation') return false;
  }
  return true;
}

function getEncounterLabRequestsForStatus(encounter, results = loadClinicalResults()) {
  if (!encounter?.doctorConsultation?.tests?.length) return [];
  return encounter.doctorConsultation.tests.map((serviceId) => {
    const result = results.find((entry) => entry.encounterId === encounter.id && entry.serviceId === serviceId);
    return {
      serviceId,
      status: result?.status || 'pending',
    };
  });
}

function getEncounterLabStatus(encounter, results = loadClinicalResults()) {
  const requests = getEncounterLabRequestsForStatus(encounter, results);
  if (!requests.length) return 'not_applicable';
  if (requests.every((entry) => entry.status === 'validated')) return 'validated';
  if (requests.some((entry) => ['in_progress', 'completed'].includes(entry.status))) return 'in_progress';
  return 'pending';
}

function getEncounterPharmacyItems(encounter) {
  if (!encounter) return [];
  const prescribed = Array.isArray(encounter.doctorConsultation?.medications)
    ? encounter.doctorConsultation.medications
    : [];
  if (prescribed.length) return prescribed;
  return (encounter.services || []).filter((item) => getDashboardCategoryBucket(item.category) === 'pharmacy');
}

function hasEncounterPharmacyNeed(encounter) {
  return getEncounterPharmacyItems(encounter).length > 0;
}

function getEncounterPrescriptionStatus(encounter) {
  if (!hasEncounterPharmacyNeed(encounter)) return 'not_applicable';
  if (encounter?.pharmacyDispense?.status === 'dispensed') return 'dispensed';
  if ((encounter.services || []).some((item) => getDashboardCategoryBucket(item.category) === 'pharmacy')) return 'dispensed';
  return 'pending';
}

function deriveEncounterWorkflow(encounter, results = loadClinicalResults()) {
  if (!encounter) {
    return { workflowStatus: 'registered', labStatus: 'not_applicable', pharmacyStatus: 'not_applicable' };
  }
  const labStatus = getEncounterLabStatus(encounter, results);
  const pharmacyStatus = getEncounterPrescriptionStatus(encounter);
  let workflowStatus = encounter.status || 'registered';
  if (pharmacyStatus === 'dispensed') {
    workflowStatus = 'pharmacy-dispensed';
  } else if (labStatus === 'validated') {
    workflowStatus = 'results-validated';
  } else if (labStatus === 'pending' || labStatus === 'in_progress') {
    workflowStatus = 'awaiting-results';
  } else if (encounter.doctorConsultation) {
    workflowStatus = 'doctor-completed';
  } else if (encounter.nurseAssessment) {
    workflowStatus = 'nurse-completed';
  }
  return { workflowStatus, labStatus, pharmacyStatus };
}

function deriveAppointmentStatus(appointment, encounter) {
  const currentStatus = appointment?.status || 'scheduled';
  if (currentStatus === 'cancelled') return 'cancelled';
  if (currentStatus === 'completed' && !encounter) return 'completed';
  if (!encounter) return currentStatus === 'in_care' || currentStatus === 'arrived' ? currentStatus : 'scheduled';
  if (encounter.doctorConsultation) return 'completed';
  if (encounter.nurseAssessment) return 'in_care';
  return 'arrived';
}

function syncFacilityInterconnections(persist = true) {
  const patients = loadPatients().slice();
  const appointments = loadAppointments().slice();
  const encounters = loadEncounters().slice();
  const receipts = loadReceipts().slice();
  const accountingEntries = loadAccountingEntries().slice();
  const clinicalResults = loadClinicalResults();
  const patientsById = new Map(patients.map((patient) => [patient.id, patient]));
  const encountersById = new Map(encounters.map((encounter) => [encounter.id, encounter]));
  const receiptsByEncounter = new Map(receipts.filter((receipt) => receipt.encounterId).map((receipt) => [receipt.encounterId, receipt]));
  const receiptsById = new Map(receipts.map((receipt) => [receipt.id, receipt]));
  let patientsChanged = false;
  let appointmentsChanged = false;
  let encountersChanged = false;
  let receiptsChanged = false;
  let accountingChanged = false;

  appointments.forEach((appointment) => {
    const patient = findPatientForAppointment(appointment, patients);
    if (patient) {
      if (appointment.patientId !== patient.id) {
        appointment.patientId = patient.id;
        appointmentsChanged = true;
      }
      const normalizedName = fullPatientName(patient);
      if (normalizedName && appointment.patientName !== normalizedName) {
        appointment.patientName = normalizedName;
        appointmentsChanged = true;
      }
      if (!appointment.phone && patient.phone) {
        appointment.phone = patient.phone;
        appointmentsChanged = true;
      }
    }
  });

  appointments.forEach((appointment) => {
    if (appointment.encounterId && encountersById.has(appointment.encounterId)) return;
    const match = encounters.find((encounter) => appointmentMatchesEncounter(appointment, encounter));
    if (match) {
      appointment.encounterId = match.id;
      appointment.receiptId = match.receiptId || appointment.receiptId || '';
      appointmentsChanged = true;
    }
  });

  encounters.forEach((encounter) => {
    const patient = patientsById.get(encounter.patientId) || findPatientForAppointment({ patientId: encounter.patientId, patientName: encounter.patientName }, patients);
    if (patient) {
      if (!encounter.patientName || encounter.patientName !== fullPatientName(patient)) {
        encounter.patientName = fullPatientName(patient);
        encountersChanged = true;
      }
      if (!encounter.patientPhone && patient.phone) {
        encounter.patientPhone = patient.phone;
        encountersChanged = true;
      }
    }
    const linkedReceipt = receiptsByEncounter.get(encounter.id);
    if (linkedReceipt) {
      if (encounter.receiptId !== linkedReceipt.id) {
        encounter.receiptId = linkedReceipt.id;
        encountersChanged = true;
      }
      if (!encounter.paymentMethod && linkedReceipt.paymentMethod) {
        encounter.paymentMethod = linkedReceipt.paymentMethod;
        encountersChanged = true;
      }
      if (!encounter.admittedBy && linkedReceipt.admittedBy) {
        encounter.admittedBy = linkedReceipt.admittedBy;
        encountersChanged = true;
      }
    }
    if (!encounter.appointmentId) {
      const match = appointments.find((appointment) => appointmentMatchesEncounter(appointment, encounter));
      if (match) {
        encounter.appointmentId = match.id;
        encountersChanged = true;
      }
    }
    const workflow = deriveEncounterWorkflow(encounter, clinicalResults);
    if (encounter.workflowStatus !== workflow.workflowStatus) {
      encounter.workflowStatus = workflow.workflowStatus;
      encountersChanged = true;
    }
    if (encounter.labStatus !== workflow.labStatus) {
      encounter.labStatus = workflow.labStatus;
      encountersChanged = true;
    }
    if (encounter.pharmacyStatus !== workflow.pharmacyStatus) {
      encounter.pharmacyStatus = workflow.pharmacyStatus;
      encountersChanged = true;
    }
  });

  receipts.forEach((receipt) => {
    const patient = patientsById.get(receipt.patientId);
    const encounter = encountersById.get(receipt.encounterId);
    if (patient && (!receipt.patientName || receipt.patientName !== fullPatientName(patient))) {
      receipt.patientName = fullPatientName(patient);
      receiptsChanged = true;
    }
    if (patient && !receipt.patientPhone && patient.phone) {
      receipt.patientPhone = patient.phone;
      receiptsChanged = true;
    }
    if (encounter && !receipt.appointmentId && encounter.appointmentId) {
      receipt.appointmentId = encounter.appointmentId;
      receiptsChanged = true;
    }
  });

  accountingEntries.forEach((entry) => {
    const receipt = receiptsById.get(entry.receiptId);
    const encounter = encountersById.get(entry.encounterId) || (receipt ? encountersById.get(receipt.encounterId) : null);
    const patient = patientsById.get(entry.patientId) || (encounter ? patientsById.get(encounter.patientId) : null);
    if (receipt && !entry.receiptId) {
      entry.receiptId = receipt.id;
      accountingChanged = true;
    }
    if (encounter && !entry.encounterId) {
      entry.encounterId = encounter.id;
      accountingChanged = true;
    }
    if (encounter && !entry.appointmentId && encounter.appointmentId) {
      entry.appointmentId = encounter.appointmentId;
      accountingChanged = true;
    }
    if (patient && (!entry.patientName || entry.patientName !== fullPatientName(patient))) {
      entry.patientName = fullPatientName(patient);
      accountingChanged = true;
    }
    if (receipt && !entry.admittedBy && receipt.admittedBy) {
      entry.admittedBy = receipt.admittedBy;
      accountingChanged = true;
    }
    if (!entry.insurer && (receipt?.insurer || encounter?.insuranceType || patient?.insuranceType)) {
      entry.insurer = receipt?.insurer || encounter?.insuranceType || patient?.insuranceType || '';
      accountingChanged = true;
    }
  });

  appointments.forEach((appointment) => {
    const encounter = appointment.encounterId ? encountersById.get(appointment.encounterId) : encounters.find((item) => appointmentMatchesEncounter(appointment, item));
    if (encounter) {
      if (appointment.encounterId !== encounter.id) {
        appointment.encounterId = encounter.id;
        appointmentsChanged = true;
      }
      if (appointment.receiptId !== (encounter.receiptId || appointment.receiptId || '')) {
        appointment.receiptId = encounter.receiptId || '';
        appointmentsChanged = true;
      }
      if (!encounter.appointmentId || encounter.appointmentId !== appointment.id) {
        encounter.appointmentId = appointment.id;
        encountersChanged = true;
      }
    }
    const nextStatus = deriveAppointmentStatus(appointment, encounter || null);
    if (appointment.status !== nextStatus) {
      appointment.status = nextStatus;
      appointmentsChanged = true;
    }
  });

  if (persist) {
    if (patientsChanged) savePatients(patients);
    if (appointmentsChanged) saveAppointments(appointments);
    if (encountersChanged) saveEncounters(encounters);
    if (receiptsChanged) saveReceipts(receipts);
    if (accountingChanged) saveAccountingEntries(accountingEntries);
  }

  return { patients, appointments, encounters, receipts, accountingEntries };
}

function refreshAppointmentsIfVisible() {
  if (appointmentsView && !appointmentsView.classList.contains('hidden')) {
    renderAppointmentsTable();
  }
}

function getPatientLinkedAppointments(patientRecord, options = {}) {
  if (!patientRecord) return [];
  const allowedStatuses = options.allowedStatuses || ['scheduled', 'arrived', 'in_care'];
  const phone = normalizePhoneComparable(patientRecord.phone);
  const name = normalizeLabel(fullPatientName(patientRecord));
  return loadAppointments()
    .filter((appointment) => {
      if (allowedStatuses && !allowedStatuses.includes(appointment.status)) return false;
      if (appointment.patientId && appointment.patientId === patientRecord.id) return true;
      if (phone && normalizePhoneComparable(appointment.phone) === phone) return true;
      const appointmentName = normalizeLabel(appointment.patientName || '');
      return !!name && !!appointmentName && (appointmentName.includes(name) || name.includes(appointmentName));
    })
    .sort((a, b) => getAppointmentTimestamp(a) - getAppointmentTimestamp(b));
}

function applyAppointmentContext(appointment, options = {}) {
  if (!appointment) return null;
  activeAppointmentId = appointment.id;
  if (assignDoctor && appointment.doctor && !assignDoctor.value) {
    assignDoctor.value = appointment.doctor;
  }
  if (!options.silent) {
    setMessage(patientMessage, t('appointments.admissionLoaded'));
  }
  return appointment;
}

function maybeLinkAppointmentToCurrentPatient(patientRecord, options = {}) {
  if (!patientRecord) {
    activeAppointmentId = '';
    return null;
  }
  const appointments = getPatientLinkedAppointments(patientRecord);
  if (!appointments.length) {
    if (!options.preserveCurrent) activeAppointmentId = '';
    return null;
  }
  const preferred = appointments.find((appointment) => appointment.id === activeAppointmentId) || appointments[0];
  return applyAppointmentContext(preferred, { silent: !!options.silent });
}

function openAppointmentInBilling(appointmentId) {
  const { appointments, patients } = syncFacilityInterconnections();
  const appointment = appointments.find((entry) => entry.id === appointmentId);
  if (!appointment) return;
  showView('billing');
  const patient = appointment.patientId ? patients.find((entry) => entry.id === appointment.patientId) : null;
  if (patient) {
    fillPatientForm(patient);
  } else {
    clearPatientForm();
    const parts = splitName(appointment.patientName || '');
    activePatientId = null;
    if (patientFirstName) patientFirstName.value = parts.first || '';
    if (patientLastName) patientLastName.value = parts.last || '';
    if (patientPhone) patientPhone.value = String(appointment.phone || '').replace(/^\+\d+\s*/, '');
    if (patientStatusLabel) patientStatusLabel.value = t('billing.newPatient');
  }
  if (assignDoctor && appointment.doctor) assignDoctor.value = appointment.doctor;
  applyAppointmentContext(appointment);
}

function getBillingAppointmentCandidate(patientRecord) {
  if (activeAppointmentId) {
    const linked = loadAppointments().find((appointment) => appointment.id === activeAppointmentId);
    if (linked) return linked;
  }
  return maybeLinkAppointmentToCurrentPatient(patientRecord, { silent: true, preserveCurrent: false });
}

function formatPharmacyQueueStatus(value) {
  const labels = {
    pending: t('dashboard.pharmacyQueuePending'),
    dispensed: t('dashboard.pharmacyQueueDispensed'),
    not_applicable: t('records.none'),
  };
  return labels[value] || value || t('records.none');
}

function getPharmacyQueueRecords() {
  const { encounters, patients } = syncFacilityInterconnections();
  const patientMap = new Map(patients.map((patient) => [patient.id, patient]));
  return encounters
    .filter((encounter) => hasEncounterPharmacyNeed(encounter))
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .map((encounter) => {
      const patient = patientMap.get(encounter.patientId);
      const items = getEncounterPharmacyItems(encounter);
      return {
        encounterId: encounter.id,
        patientId: encounter.patientId,
        patientName: encounter.patientName || fullPatientName(patient) || '-',
        prescription: items.map((item) => `${item.name || item.label || '-'} x${parseNumber(item.qty) || 1}`).join(', '),
        status: getEncounterPrescriptionStatus(encounter),
        recordedAt: encounter.pharmacyDispense?.recordedAt || '',
      };
    });
}

function renderPharmacyQueue() {
  if (!pharmacyQueueTable) return;
  const queue = getPharmacyQueueRecords();
  pharmacyQueueTable.innerHTML = '';
  if (!queue.length) {
    renderClinicalEmptyRow(pharmacyQueueTable, 4);
    return;
  }
  queue.forEach((entry) => {
    const row = document.createElement('tr');
    row.dataset.encounterId = entry.encounterId;
    row.innerHTML = `
      <td>${escapeHtml(entry.patientName || '-')}</td>
      <td>${escapeHtml(entry.prescription || t('records.none'))}</td>
      <td>${escapeHtml(formatPharmacyQueueStatus(entry.status))}</td>
      <td>${entry.status === 'dispensed'
        ? '-'
        : `<button type="button" class="ghost pharmacy-dispense" data-encounter-id="${escapeHtml(entry.encounterId)}">${escapeHtml(t('dashboard.pharmacyDispenseAction'))}</button>`}</td>
    `;
    pharmacyQueueTable.appendChild(row);
  });
}

function markEncounterPrescriptionDispensed(encounterId) {
  if (!encounterId) return;
  const encounters = loadEncounters();
  const match = encounters.find((encounter) => encounter.id === encounterId);
  if (!match || !hasEncounterPharmacyNeed(match)) return;
  match.pharmacyDispense = {
    status: 'dispensed',
    recordedBy: currentEmployee?.name || currentEmployee?.code || '',
    recordedAt: new Date().toISOString(),
    items: getEncounterPharmacyItems(match).map((item) => ({
      name: item.name || item.label || '',
      qty: parseNumber(item.qty) || 1,
      stockId: item.stockId || '',
    })),
  };
  saveEncounters(encounters);
  syncFacilityInterconnections(true);
  refreshDashboardIfVisible();
  refreshClinicalRecordsIfVisible();
  refreshAppointmentsIfVisible();
}

function getStockTypeLabel(value) {
  const labels = {
    medication: t('inventory.typeMedication'),
    consumable: t('inventory.typeConsumable'),
    reagent: t('inventory.typeReagent'),
    equipment: t('inventory.typeEquipment'),
    other: t('inventory.typeOther'),
  };
  return labels[normalizeStockType(value)] || value || '-';
}

function formatInventoryMovementDirection(value) {
  return value === 'in' ? t('inventory.directionIn') : t('inventory.directionOut');
}

function formatInventoryMovementType(value) {
  const labels = {
    purchase: t('inventory.movementPurchase'),
    consumption: t('inventory.movementConsumption'),
    adjustment: t('inventory.movementAdjustment'),
    manual_entry: t('inventory.movementManual'),
  };
  return labels[value] || value || '-';
}

function formatInventorySourceLabel(value) {
  const labels = {
    inventory: t('inventory.sourceInventory'),
    purchase_order: t('inventory.sourcePurchase'),
    billing: t('inventory.sourceBilling'),
    doctor: t('inventory.sourceDoctor'),
    nurse: t('inventory.sourceNurse'),
    lab: t('inventory.sourceLab'),
    radiology: t('inventory.sourceRadiology'),
    pharmacy: t('inventory.sourcePharmacy'),
    hospitalization: t('inventory.sourceHospitalization'),
  };
  return labels[value] || String(value || '-').replace(/_/g, ' ');
}

function getStockStatusMeta(item) {
  const qty = parseNumber(item.qty);
  const min = parseNumber(item.min);
  const now = new Date();
  const expiry = item.expiryDate ? new Date(item.expiryDate) : null;
  const daysToExpiry = expiry ? Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : null;
  if (expiry && expiry < now) {
    return { label: t('inventory.statusExpired'), code: 'expired' };
  }
  if (daysToExpiry !== null && daysToExpiry <= 30) {
    return { label: t('inventory.statusExpiring'), code: 'expiring' };
  }
  if (min && qty <= min) {
    return { label: t('inventory.statusLow'), code: 'low' };
  }
  return { label: t('inventory.statusOk'), code: 'ok' };
}

function updateStockAlerts() {
  const stock = loadStock();
  const now = new Date();
  const alerts = stock.filter((item) => {
    const qty = parseNumber(item.qty);
    const min = parseNumber(item.min);
    const expiry = item.expiryDate ? new Date(item.expiryDate) : null;
    const expiringSoon = expiry && expiry >= now && (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24) <= 30;
    return (min && qty <= min) || (expiry && expiry < now) || expiringSoon;
  });
  if (pharmacyAlerts) pharmacyAlerts.textContent = alerts.length.toString();
}

function recordStockMovement(entry) {
  const movements = loadStockMovements();
  const normalized = normalizeStockMovementRecord(entry);
  movements.push(normalized);
  saveStockMovements(movements);
  return normalized;
}

function findMatchingStockEntry(stock, payload) {
  return stock.find((entry) => {
    return (
      normalizeLabel(entry.name) === normalizeLabel(payload.name) &&
      normalizeStockType(entry.type) === normalizeStockType(payload.type) &&
      normalizeLabel(entry.supplier || '') === normalizeLabel(payload.supplier || '') &&
      String(entry.expiryDate || '') === String(payload.expiryDate || '')
    );
  });
}

function upsertStockReceipt(payload, meta = {}) {
  const stock = loadStock();
  const qtyToAdd = Math.max(0, parseNumber(payload.qty));
  let item = payload.stockId ? stock.find((entry) => entry.id === payload.stockId) : null;
  if (!item) {
    item = findMatchingStockEntry(stock, payload);
  }
  if (item) {
    item.name = payload.name || item.name;
    item.type = normalizeStockType(payload.type || item.type);
    item.supplier = payload.supplier || item.supplier;
    item.unitPrice = parseNumber(payload.unitPrice || item.unitPrice);
    item.min = parseNumber(payload.min ?? item.min);
    item.entryDate = payload.entryDate || item.entryDate;
    item.expiryDate = payload.expiryDate || item.expiryDate;
    item.receiptName = payload.receiptName || item.receiptName;
    item.notes = payload.notes || item.notes;
    item.qty = parseNumber(item.qty) + qtyToAdd;
    item.updatedAt = new Date().toISOString();
  } else {
    item = normalizeStockRecord({
      id: `ST-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: payload.name,
      type: payload.type,
      supplier: payload.supplier,
      unitPrice: payload.unitPrice,
      qty: qtyToAdd,
      min: payload.min,
      entryDate: payload.entryDate,
      expiryDate: payload.expiryDate,
      receiptName: payload.receiptName,
      notes: payload.notes,
      updatedAt: new Date().toISOString(),
    });
    stock.push(item);
  }
  saveStock(stock);
  if (qtyToAdd > 0) {
    recordStockMovement({
      stockId: item.id,
      item: item.name,
      itemType: item.type,
      direction: 'in',
      qty: qtyToAdd,
      unitCost: item.unitPrice,
      totalCost: qtyToAdd * parseNumber(item.unitPrice),
      movementType: meta.movementType || 'manual_entry',
      sourceModule: meta.sourceModule || 'inventory',
      recordedBy: meta.recordedBy || currentEmployee?.name || currentEmployee?.code || '',
      supplier: item.supplier,
      note: meta.note || payload.notes || '',
      createdAt: meta.createdAt || new Date().toISOString(),
    });
  }
  return item;
}

function renderInventorySummary() {
  const stock = loadStock();
  const orders = loadPurchaseOrders();
  const now = new Date();
  const lowCount = stock.filter((item) => parseNumber(item.min) > 0 && parseNumber(item.qty) <= parseNumber(item.min)).length;
  const expiringCount = stock.filter((item) => {
    if (!item.expiryDate) return false;
    const expiry = new Date(item.expiryDate);
    if (Number.isNaN(expiry.getTime())) return false;
    const delta = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return delta >= 0 && delta <= 30;
  }).length;
  const openOrders = orders.filter((order) => ['open', 'partial'].includes(order.status)).length;
  if (inventoryTotalProducts) inventoryTotalProducts.textContent = stock.length.toString();
  if (inventoryLowAlerts) inventoryLowAlerts.textContent = lowCount.toString();
  if (inventoryExpiringAlerts) inventoryExpiringAlerts.textContent = expiringCount.toString();
  if (inventoryOpenOrders) inventoryOpenOrders.textContent = openOrders.toString();
}

function renderStockTable() {
  if (!stockTableBody) return;
  const stock = loadStock();
  stockTableBody.innerHTML = '';
  if (!stock.length) {
    renderClinicalEmptyRow(stockTableBody, 11);
    return;
  }
  stock.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  stock.forEach((item) => {
    const status = getStockStatusMeta(item);
    const row = document.createElement('tr');
    row.dataset.id = item.id;
    row.innerHTML = `
      <td>${escapeHtml(item.name || '-')}</td>
      <td>${escapeHtml(getStockTypeLabel(item.type))}</td>
      <td>${escapeHtml(item.supplier || '-')}</td>
      <td><input class="stock-qty" type="number" min="0" step="1" value="${parseNumber(item.qty)}" /></td>
      <td><input class="stock-min" type="number" min="0" step="1" value="${parseNumber(item.min)}" /></td>
      <td><input class="stock-price" type="number" min="0" step="1" value="${parseNumber(item.unitPrice)}" /></td>
      <td>${escapeHtml(item.entryDate || '-')}</td>
      <td>${escapeHtml(item.expiryDate || '-')}</td>
      <td>${escapeHtml(item.receiptName || '-')}</td>
      <td>${escapeHtml(status.label)}</td>
      <td>
        <button type="button" class="stock-save ghost" data-id="${escapeHtml(item.id)}">${t('inventory.update')}</button>
        <button type="button" class="remove-row" data-id="${escapeHtml(item.id)}">${t('inventory.remove')}</button>
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
    renderClinicalEmptyRow(poTableBody, 11);
    return;
  }
  orders.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  orders.forEach((order) => {
    const remaining = Math.max(0, parseNumber(order.qtyOrdered) - parseNumber(order.qtyReceived));
    const statusLabels = {
      open: t('inventory.statusOpen'),
      partial: t('inventory.statusPartial'),
      received: t('inventory.statusReceived'),
      cancelled: t('inventory.statusCancelled'),
    };
    const row = document.createElement('tr');
    row.dataset.id = order.id;
    row.innerHTML = `
      <td>${escapeHtml(order.supplier || '-')}</td>
      <td>${escapeHtml(order.itemName || '-')}</td>
      <td>${escapeHtml(getStockTypeLabel(order.type))}</td>
      <td>${escapeHtml(String(parseNumber(order.qtyOrdered)))}</td>
      <td>${escapeHtml(String(parseNumber(order.qtyReceived)))}</td>
      <td>${escapeHtml(formatCfl(order.unitCost || 0))}</td>
      <td>${escapeHtml(formatCfl(parseNumber(order.qtyOrdered) * parseNumber(order.unitCost)))}</td>
      <td>${escapeHtml(order.expectedDate || '-')}</td>
      <td>${escapeHtml(order.receivedDate || '-')}</td>
      <td>${escapeHtml(statusLabels[order.status] || order.status || '-')}</td>
      <td>
        <input class="po-receive-qty" type="number" min="1" max="${remaining || 1}" step="1" value="${remaining ? 1 : 0}" ${remaining ? '' : 'disabled'} />
        <button type="button" class="po-receive ghost" data-id="${escapeHtml(order.id)}" ${remaining ? '' : 'disabled'}>${t('inventory.receiveAction')}</button>
        <button type="button" class="remove-row" data-id="${escapeHtml(order.id)}">${t('inventory.remove')}</button>
      </td>
    `;
    poTableBody.appendChild(row);
  });
}

function renderStockMovementTable() {
  if (!stockMovementTableBody) return;
  const movements = loadStockMovements()
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  stockMovementTableBody.innerHTML = '';
  if (!movements.length) {
    renderClinicalEmptyRow(stockMovementTableBody, 8);
    return;
  }
  movements.forEach((movement) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${escapeHtml(formatDate(movement.createdAt) || '-')}</td>
      <td>${escapeHtml(movement.item || '-')}</td>
      <td>${escapeHtml(getStockTypeLabel(movement.itemType))}</td>
      <td>${escapeHtml(`${formatInventoryMovementDirection(movement.direction)} · ${formatInventoryMovementType(movement.movementType)}`)}</td>
      <td>${escapeHtml(String(parseNumber(movement.qty)))}</td>
      <td>${escapeHtml(formatInventorySourceLabel(movement.sourceModule))}</td>
      <td>${escapeHtml(formatCfl(movement.totalCost || 0))}</td>
      <td>${escapeHtml(movement.recordedBy || '-')}</td>
    `;
    stockMovementTableBody.appendChild(row);
  });
}

function refreshInventorySelectors() {
  populateDoctorStockOptions();
  populateNurseStockOptions();
  populateLabStockOptions();
}

function renderInventoryModule() {
  renderInventorySummary();
  renderStockTable();
  renderPurchaseOrders();
  renderStockMovementTable();
  refreshInventorySelectors();
}

function refreshInventoryIfVisible() {
  if (inventoryView && !inventoryView.classList.contains('hidden')) {
    renderInventoryModule();
  } else {
    refreshInventorySelectors();
    updateStockAlerts();
  }
}

function findStockItemForUsage(stock, item) {
  if (item.stockId) {
    const exact = stock.find((entry) => entry.id === item.stockId);
    if (exact) return exact;
  }
  const label = item.label || item.name || '';
  if (!label) return null;
  return stock.find((entry) => normalizeLabel(entry.name) === normalizeLabel(label));
}

function applyStockDeductions(items, meta = {}) {
  if (!items?.length) return;
  const stock = loadStock();
  let updated = false;
  items.forEach((item) => {
    const match = findStockItemForUsage(stock, item);
    if (!match) return;
    const qtyUsed = Math.abs(parseNumber(item.qty));
    if (!qtyUsed) return;
    const before = parseNumber(match.qty);
    match.qty = Math.max(0, before - qtyUsed);
    match.updatedAt = new Date().toISOString();
    recordStockMovement({
      stockId: match.id,
      item: match.name,
      itemType: match.type,
      direction: 'out',
      qty: qtyUsed,
      unitCost: match.unitPrice,
      totalCost: qtyUsed * parseNumber(match.unitPrice),
      movementType: 'consumption',
      sourceModule: meta.sourceRole || item.sourceRole || 'inventory',
      recordedBy: meta.recordedBy || currentEmployee?.name || currentEmployee?.code || '',
      patientId: meta.patientId || item.patientId || '',
      encounterId: meta.encounterId || item.encounterId || '',
      createdAt: meta.createdAt || new Date().toISOString(),
      note: meta.note || item.note || '',
    });
    updated = true;
  });
  if (updated) {
    saveStock(stock);
    refreshInventoryIfVisible();
    refreshDashboardIfVisible();
  }
}

function getServiceCounts(receipts) {
  const counts = {
    consultation: 0,
    lab: 0,
    imaging: 0,
    hospitalization: 0,
    surgery: 0,
    outpatient: 0,
    pharmacy: 0,
  };
  receipts.forEach((rec) => {
    (rec.items || []).forEach((item) => {
      const category = normalizeServiceCategory(item.category);
      if (counts[category] !== undefined) {
        counts[category] += 1;
      }
    });
  });
  return counts;
}

function calculateDoctorPayslip(doctor) {
  const payroll = calculateEmployeePayroll(doctor, getDefaultPayrollPeriod());
  return {
    gross: payroll.gross,
    otr: payroll.taxWithholding,
    net: payroll.netDue,
    serviceCount: payroll.serviceCount,
  };
}

function populateNurseEncounterOptions() {
  if (!nurseEncounterSelect) return;
  const currentValue = nurseEncounterSelect.value;
  const encounters = loadEncounters();
  nurseEncounterSelect.innerHTML = `<option value="">${t('select.placeholder')}</option>`;
  encounters.forEach((encounter) => {
    const option = document.createElement('option');
    option.value = encounter.id;
    option.textContent = `${encounter.patientName} · ${encounter.doctorName || '-'}`;
    nurseEncounterSelect.appendChild(option);
  });
  nurseEncounterSelect.value = currentValue;
}

function populateDoctorEncounterOptions() {
  if (!doctorEncounterSelect) return;
  const currentValue = doctorEncounterSelect.value;
  const encounters = loadEncounters();
  const docKey = currentEmployee?.code || currentEmployee?.email || currentEmployee?.name;
  const filtered = currentEmployee?.role === 'doctor'
    ? encounters.filter((encounter) => encounter.doctor === docKey || encounter.doctorName === currentEmployee?.name)
    : encounters;
  doctorEncounterSelect.innerHTML = `<option value="">${t('select.placeholder')}</option>`;
  filtered.forEach((encounter) => {
    const option = document.createElement('option');
    option.value = encounter.id;
    option.textContent = `${encounter.patientName} · ${formatDate(encounter.createdAt)}`;
    doctorEncounterSelect.appendChild(option);
  });
  doctorEncounterSelect.value = pendingDashboardEncounterId || currentValue;
  if (pendingDashboardEncounterId && doctorEncounterSelect.value === pendingDashboardEncounterId) {
    pendingDashboardEncounterId = '';
  }
  if (doctorEncounterSelect.value) {
    doctorEncounterSelect.dispatchEvent(new Event('change'));
  }
}

function populateDoctorTestOptions() {
  if (!doctorTests) return;
  const selectedValues = new Set(Array.from(doctorTests.selectedOptions || []).map((option) => option.value));
  const catalog = loadServiceCatalog().filter((item) =>
    ['lab', 'imaging', 'outpatient'].includes(getDashboardCategoryBucket(item.category))
  );
  doctorTests.innerHTML = '';
  catalog.forEach((service) => {
    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = `${service.name} (${getServiceCategoryLabel(service.category)})`;
    option.selected = selectedValues.has(option.value);
    doctorTests.appendChild(option);
  });
}

function populateDoctorStockOptions() {
  if (!doctorStockItem) return;
  const currentValue = doctorStockItem.value;
  const stock = loadStock();
  doctorStockItem.innerHTML = `<option value="">${t('select.placeholder')}</option>`;
  stock.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = `${item.name} (${getStockTypeLabel(item.type)} · ${item.qty || 0})`;
    doctorStockItem.appendChild(option);
  });
  doctorStockItem.value = currentValue;
}

function populateNurseStockOptions() {
  if (!nurseStockItem) return;
  const currentValue = nurseStockItem.value;
  const stock = loadStock();
  nurseStockItem.innerHTML = `<option value="">${t('select.placeholder')}</option>`;
  stock.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = `${item.name} (${getStockTypeLabel(item.type)} · ${item.qty || 0})`;
    nurseStockItem.appendChild(option);
  });
  nurseStockItem.value = currentValue;
}

function populateLabStockOptions() {
  if (!labStockItem) return;
  const currentValue = labStockItem.value;
  const stock = loadStock();
  const filtered = stock.filter((item) => ['reagent', 'consumable'].includes(normalizeStockType(item.type)));
  const source = filtered.length ? filtered : stock;
  labStockItem.innerHTML = `<option value="">${t('select.placeholder')}</option>`;
  source.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = `${item.name} (${getStockTypeLabel(item.type)} · ${item.qty || 0})`;
    labStockItem.appendChild(option);
  });
  labStockItem.value = currentValue;
}

function renderDoctorMedicationList() {
  if (!doctorMedicationList) return;
  doctorMedicationList.innerHTML = '';
  pendingDoctorMedication.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-result';
    button.dataset.stockId = item.stockId;
    button.innerHTML = `<strong>${item.name}</strong><span>${item.qty}</span>`;
    doctorMedicationList.appendChild(button);
  });
}

function renderNurseSupplyList() {
  if (!nurseSupplyList) return;
  nurseSupplyList.innerHTML = '';
  pendingNurseSupplies.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-result';
    button.dataset.stockId = item.stockId;
    button.innerHTML = `<strong>${item.name}</strong><span>${item.qty}</span>`;
    nurseSupplyList.appendChild(button);
  });
}

function renderLabSupplyList() {
  if (!labSupplyList) return;
  labSupplyList.innerHTML = '';
  pendingLabSupplies.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-result';
    button.dataset.stockId = item.stockId;
    button.innerHTML = `<strong>${item.name}</strong><span>${item.qty}</span>`;
    labSupplyList.appendChild(button);
  });
}

function getEncounterById(id) {
  return loadEncounters().find((encounter) => encounter.id === id) || null;
}

function setDoctorEncounterSummary(encounter) {
  if (!doctorPatientSummary) return;
  if (!encounter) {
    doctorPatientSummary.textContent = t('dashboard.placeholder');
    return;
  }
  const patient = loadPatients().find((item) => item.id === encounter.patientId);
  const details = [];
  if (patient) {
    details.push(`${fullPatientName(patient)} · ${patient.sex || '-'} · ${patient.age || '-'}`);
    details.push([patient.address?.country, patient.address?.city, patient.address?.district].filter(Boolean).join(', '));
  }
  if (encounter.nurseAssessment) {
    const nurse = encounter.nurseAssessment;
    details.push(
      `Vitals: T ${nurse.temperature || '-'} | BP R ${nurse.bpRight || '-'} | BP L ${nurse.bpLeft || '-'} | W ${nurse.weight || '-'} | H ${nurse.height || '-'} | P ${nurse.pulse || '-'}`
    );
  }
  doctorPatientSummary.textContent = details.filter(Boolean).join(' | ') || t('dashboard.placeholder');
}


function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatSexLabel(value) {
  const labels = {
    female: t('billing.sexFemale'),
    male: t('billing.sexMale'),
    other: t('billing.sexOther'),
  };
  return labels[value] || value || '-';
}

function formatPaymentMethodLabel(value) {
  const labels = {
    cash: t('billing.paymentCash'),
    bank_transfer: t('billing.paymentBank'),
    mobile_money: currentLang === 'fr' ? 'Mobile money' : 'Mobile money',
    cheque: currentLang === 'fr' ? 'Chèque' : 'Cheque',
    other: currentLang === 'fr' ? 'Autre' : 'Other',
  };
  return labels[value] || value || '-';
}

function formatPrescriptionTypeLabel(value) {
  const labels = {
    outpatient_care: t('dashboard.prescriptionOutpatientCare'),
    day_hospitalization: t('dashboard.prescriptionDay'),
    full_hospitalization: t('dashboard.prescriptionFull'),
    outpatient_prescription: t('dashboard.prescriptionOutpatientRx'),
  };
  return labels[value] || value || t('records.none');
}

function formatCareModeLabel(value) {
  const labels = {
    outpatient: t('dashboard.modeOutpatient'),
    day: t('dashboard.modeDay'),
    full: t('dashboard.modeFull'),
  };
  return labels[value] || value || t('records.none');
}

function formatEncounterStatusLabel(value) {
  const labels = {
    registered: t('records.encounterRegistered'),
    'nurse-completed': t('records.encounterNurseCompleted'),
    'doctor-completed': t('records.encounterDoctorCompleted'),
    'awaiting-results': t('records.encounterAwaitingResults'),
    'results-validated': t('records.encounterResultsValidated'),
    'pharmacy-dispensed': t('records.encounterPharmacyDispensed'),
  };
  return labels[value] || value || t('records.none');
}

function formatClinicalResultStatus(value) {
  const labels = {
    unpaid: t('records.unpaid'),
    pending: t('records.statusPending'),
    in_progress: t('records.statusInProgress'),
    completed: t('records.statusCompleted'),
    validated: t('records.statusValidated'),
  };
  return labels[value] || value || t('records.none');
}

function renderClinicalEmptyRow(tbody, colspan) {
  if (!tbody) return;
  tbody.innerHTML = '';
  const row = document.createElement('tr');
  row.innerHTML = `<td colspan="${colspan}">${t('dashboard.noData')}</td>`;
  tbody.appendChild(row);
}

function filterClinicalSectionsByRole() {
  const sections = document.querySelectorAll('[data-record-roles]');
  sections.forEach((section) => {
    if (!currentEmployee?.role) {
      section.classList.add('hidden');
      return;
    }
    const allowed = (section.getAttribute('data-record-roles') || '')
      .split(',')
      .map((role) => role.trim())
      .filter(Boolean);
    section.classList.toggle('hidden', !allowed.includes(currentEmployee.role));
  });
}

function getClinicalExamRequests(roleFilter = '', patientId = '') {
  const encounters = loadEncounters();
  const catalog = loadServiceCatalog();
  const results = loadClinicalResults();
  const serviceMap = new Map(catalog.map((service) => [service.id, service]));
  return encounters
    .filter((encounter) => !patientId || encounter.patientId === patientId)
    .flatMap((encounter) => {
      const consultation = encounter.doctorConsultation;
      if (!consultation?.tests?.length) return [];
      return consultation.tests
        .map((serviceId) => {
          const service = serviceMap.get(serviceId);
          const bucket = getDashboardCategoryBucket(service?.category || '');
          if (roleFilter === 'lab' && bucket !== 'lab') return null;
          if (roleFilter === 'radiology' && bucket !== 'imaging') return null;
          const result = results.find(
            (entry) => entry.encounterId === encounter.id && entry.serviceId === serviceId
          );
          const paid = (encounter.services || []).some((item) => {
            if (item.serviceId && item.serviceId === serviceId) return true;
            if (service && normalizeLabel(item.label) === normalizeLabel(service.name)) return true;
            if (service && normalizeLabel(item.code) === normalizeLabel(service.code || service.diseaseCode || '')) return true;
            return false;
          });
          return {
            id: `${encounter.id}::${serviceId}`,
            patientId: encounter.patientId,
            patientName: encounter.patientName,
            encounterId: encounter.id,
            serviceId,
            serviceName: service?.name || serviceId,
            category: service?.category || '',
            categoryLabel: service ? getServiceCategoryLabel(service.category) : '-',
            bucket,
            prescribedAt: consultation.recordedAt || encounter.createdAt,
            doctorName: encounter.doctorName || consultation.recordedBy || '-',
            isPaid: paid,
            status: result?.status || (paid ? 'pending' : 'unpaid'),
            resultText: result?.resultText || '',
            comment: result?.comment || '',
            recordedBy: result?.recordedBy || '',
            updatedAt: result?.updatedAt || result?.createdAt || '',
            supplies: Array.isArray(result?.supplies) ? result.supplies : [],
            stockAppliedAt: result?.stockAppliedAt || '',
          };
        })
        .filter(Boolean);
    })
    .sort((a, b) => new Date(b.prescribedAt || 0) - new Date(a.prescribedAt || 0));
}

function getClinicalAccessiblePatients() {
  const patients = loadPatients();
  const role = currentEmployee?.role || '';
  if (['admin', 'director', 'accountant', 'admission'].includes(role)) {
    return [...patients].sort((a, b) => fullPatientName(a).localeCompare(fullPatientName(b)));
  }
  let ids = new Set();
  if (role === 'doctor') {
    loadEncounters().forEach((encounter) => {
      if (matchesCurrentEmployeeProvider(encounter)) ids.add(encounter.patientId);
    });
  } else if (role === 'nurse') {
    loadEncounters().forEach((encounter) => {
      if (encounter.patientId) ids.add(encounter.patientId);
    });
  } else if (role === 'lab' || role === 'radiology') {
    getClinicalExamRequests(role).forEach((request) => {
      if ((request.isPaid || request.updatedAt) && request.patientId) ids.add(request.patientId);
    });
  } else if (role === 'pharmacy') {
    loadEncounters().forEach((encounter) => {
      if (hasEncounterPharmacyNeed(encounter) && encounter.patientId) ids.add(encounter.patientId);
    });
  } else {
    return [...patients].sort((a, b) => fullPatientName(a).localeCompare(fullPatientName(b)));
  }
  return patients
    .filter((patient) => ids.has(patient.id))
    .sort((a, b) => fullPatientName(a).localeCompare(fullPatientName(b)));
}

function getClinicalPatientMatches(query = '') {
  const accessible = getClinicalAccessiblePatients();
  const normalizedQuery = normalizeLabel(query);
  if (!normalizedQuery) return accessible.slice(0, 12);
  return accessible.filter((patient) => {
    return [
      fullPatientName(patient),
      patient.phone,
      patient.whatsapp,
      patient.identifier,
    ]
      .map((value) => normalizeLabel(value || ''))
      .some((value) => value.includes(normalizedQuery));
  });
}

function collectClinicalRecord(patientId) {
  const patient = loadPatients().find((entry) => entry.id === patientId) || null;
  const encounters = loadEncounters()
    .filter((entry) => entry.patientId === patientId)
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  const receipts = loadReceipts()
    .filter((entry) => entry.patientId === patientId)
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  const accounting = loadAccountingEntries()
    .filter((entry) => entry.patientId === patientId)
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  const examRequests = getClinicalExamRequests('', patientId);
  const results = loadClinicalResults()
    .filter((entry) => entry.patientId === patientId)
    .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
  const catalog = new Map(loadServiceCatalog().map((service) => [service.id, service]));
  const doctorRows = encounters
    .filter((encounter) => !!encounter.doctorConsultation)
    .map((encounter) => {
      const consultation = encounter.doctorConsultation;
      const tests = (consultation.tests || [])
        .map((testId) => catalog.get(testId)?.name || testId)
        .filter(Boolean)
        .join(', ');
      return {
        encounterId: encounter.id,
        date: consultation.recordedAt || encounter.createdAt,
        complaint: [consultation.complaint, consultation.symptoms].filter(Boolean).join(' · ') || t('records.none'),
        diagnoses: [
          (consultation.diagnoses || []).join(' · '),
          consultation.examSummary,
          tests ? `Tests: ${tests}` : '',
        ].filter(Boolean).join(' | ') || t('records.none'),
        prescriptionType: [
          formatPrescriptionTypeLabel(consultation.prescriptionType),
          (consultation.medications || []).map((item) => `${item.name} x${item.qty}`).join(', '),
          formatPharmacyQueueStatus(getEncounterPrescriptionStatus(encounter)),
        ].filter(Boolean).join(' | '),
        tests,
        doctorName: encounter.doctorName || consultation.recordedBy || '-',
      };
    });
  const nurseRows = encounters
    .filter((encounter) => !!encounter.nurseAssessment)
    .map((encounter) => {
      const nurse = encounter.nurseAssessment;
      return {
        date: nurse.recordedAt || encounter.createdAt,
        vitals: [
          `T ${nurse.temperature || '-'}`,
          `BP R ${nurse.bpRight || '-'}`,
          `BP L ${nurse.bpLeft || '-'}`,
          `W ${nurse.weight || '-'}`,
          `H ${nurse.height || '-'}`,
          `P ${nurse.pulse || '-'}`,
        ].join(' | '),
        mode: nurse.mode || 'outpatient',
        care: [nurse.careNotes, nurse.roomNumber ? `Room ${nurse.roomNumber}` : '', nurse.bedNumber ? `Bed ${nurse.bedNumber}` : '']
          .filter(Boolean)
          .join(' · ') || t('records.none'),
      };
    });
  const prescriptionRows = encounters
    .filter((encounter) => !!encounter.doctorConsultation)
    .map((encounter) => {
      const consultation = encounter.doctorConsultation;
      const meds = (consultation.medications || [])
        .map((item) => `${item.name} x${item.qty}`)
        .join(', ');
      const tests = (consultation.tests || [])
        .map((testId) => catalog.get(testId)?.name || testId)
        .join(', ');
      return {
        date: consultation.recordedAt || encounter.createdAt,
        type: formatPrescriptionTypeLabel(consultation.prescriptionType),
        medications: meds || t('records.none'),
        tests: tests || t('records.none'),
        provider: encounter.doctorName || consultation.recordedBy || '-',
      };
    });
  const billingRows = receipts.map((receipt) => {
    const accountingEntry = accounting.find((entry) => entry.receiptId === receipt.id);
    return {
      receiptId: receipt.id,
      date: receipt.createdAt,
      total: receipt.total || 0,
      insurance: accountingEntry?.insurerAmount ?? receipt.insuranceTotal ?? 0,
      patient: (accountingEntry?.cashAmount || 0) + (accountingEntry?.bankAmount || 0) || receipt.patientTotal || 0,
      paymentMethod: accountingEntry?.paymentMethod || receipt.paymentMethod || '',
      cashier: accountingEntry?.admittedBy || receipt.admittedBy || '-',
    };
  });
  return {
    patient,
    encounters,
    receipts,
    accounting,
    examRequests,
    results,
    doctorRows,
    nurseRows,
    prescriptionRows,
    stats: {
      visits: encounters.length,
      consultations: doctorRows.length,
      hospitalizations: encounters.filter((encounter) => isHospitalizationEncounter(encounter)).length,
      invoices: receipts.length,
    },
  };
}

function renderClinicalPatientResults(matches) {
  if (!clinicalPatientResults) return;
  clinicalPatientResults.innerHTML = '';
  matches.forEach((patient) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-result';
    button.dataset.patientId = patient.id;
    button.innerHTML = `
      <strong>${escapeHtml(fullPatientName(patient) || '-')}</strong>
      <span>${escapeHtml(patient.identifier || patient.phone || '-')}</span>
    `;
    clinicalPatientResults.appendChild(button);
  });
}

function renderClinicalRecordSummary(record) {
  if (!clinicalSelectedPatientName || !clinicalSelectedPatientMeta || !clinicalSelectedPatientStats) return;
  if (!record?.patient) {
    clinicalSelectedPatientName.textContent = t('records.noPatientSelected');
    clinicalSelectedPatientMeta.textContent = t('records.selectPatientHint');
    clinicalSelectedPatientStats.innerHTML = '';
    return;
  }
  const patient = record.patient;
  clinicalSelectedPatientName.textContent = fullPatientName(patient) || t('records.noPatientSelected');
  clinicalSelectedPatientMeta.textContent = [
    patient.identifier || '-',
    patient.phone || '-',
    patient.insuranceType || t('records.uninsured'),
  ].join(' · ');
  clinicalSelectedPatientStats.innerHTML = `
    <span class="pill"><strong>${record.stats.visits}</strong> ${t('records.labelVisits')}</span>
    <span class="pill"><strong>${record.stats.consultations}</strong> ${t('records.labelConsultations')}</span>
    <span class="pill"><strong>${record.stats.hospitalizations}</strong> ${t('records.labelHospitalizations')}</span>
    <span class="pill"><strong>${record.stats.invoices}</strong> ${t('records.labelInvoices')}</span>
  `;
}

function renderClinicalInfoGrid(container, entries) {
  if (!container) return;
  container.innerHTML = entries
    .map(
      (entry) => `
        <div class="record-card">
          <span>${escapeHtml(entry.label)}</span>
          <strong>${escapeHtml(entry.value || '-')}</strong>
        </div>
      `
    )
    .join('');
}

function renderClinicalIdentity(record) {
  const patient = record?.patient;
  if (!patient) {
    if (clinicalIdentityGrid) clinicalIdentityGrid.innerHTML = '';
    if (clinicalSocioGrid) clinicalSocioGrid.innerHTML = '';
    return;
  }
  renderClinicalInfoGrid(clinicalIdentityGrid, [
    { label: t('records.labelIdentifier'), value: patient.identifier || '-' },
    { label: t('records.labelSex'), value: formatSexLabel(patient.sex) },
    { label: t('records.labelDob'), value: formatDate(patient.dob) || '-' },
    { label: t('records.labelAge'), value: patient.age || calculateAgeFromDob(patient.dob) || '-' },
    { label: t('records.labelPhone'), value: patient.phone || '-' },
    { label: t('records.labelWhatsapp'), value: patient.whatsapp || '-' },
  ]);
  renderClinicalInfoGrid(clinicalSocioGrid, [
    { label: t('records.labelAddress'), value: [patient.address?.country, patient.address?.city, patient.address?.district, patient.address?.postalCode].filter(Boolean).join(', ') || '-' },
    { label: t('records.labelProfession'), value: patient.profession || '-' },
    { label: t('records.labelEducation'), value: patient.education || '-' },
    { label: t('records.labelInsurance'), value: patient.insuranceType || t('records.uninsured') },
    { label: t('records.labelCoverage'), value: patient.coverage ? `${patient.coverage}%` : '-' },
    { label: t('records.labelExpiry'), value: formatDate(patient.insuranceExpiry) || '-' },
    { label: t('records.labelProvider'), value: patient.doctor || '-' },
    { label: t('records.labelRegisteredAt'), value: formatDate(patient.createdAt) || '-' },
    { label: t('records.labelUpdatedAt'), value: formatDate(patient.updatedAt) || '-' },
  ]);
}

function renderClinicalHistory(record) {
  if (!clinicalAntecedents || !clinicalNotes) return;
  const history = record?.patient?.clinicalHistory || {};
  clinicalAntecedents.value = history.antecedents || '';
  clinicalNotes.value = history.notes || '';
}

function renderClinicalEncounterHistory(record) {
  if (!clinicalEncounterTable) return;
  const rows = record?.encounters || [];
  if (!rows.length) {
    renderClinicalEmptyRow(clinicalEncounterTable, 5);
    return;
  }
  clinicalEncounterTable.innerHTML = rows
    .map((encounter) => {
      const services = (encounter.services || []).map((item) => item.label).slice(0, 3).join(', ');
      return `
        <tr>
          <td>${escapeHtml(formatDate(encounter.createdAt) || '-')}</td>
          <td>${escapeHtml(encounter.doctorName || '-')}</td>
          <td>${escapeHtml(formatEncounterStatusLabel(encounter.workflowStatus || encounter.status || '-'))}</td>
          <td>${escapeHtml(services || t('records.none'))}</td>
          <td>${escapeHtml(formatPaymentMethodLabel(encounter.paymentMethod))}</td>
        </tr>
      `;
    })
    .join('');
}

function renderClinicalNurseAssessments(record) {
  if (!clinicalNurseTable) return;
  const rows = record?.nurseRows || [];
  if (!rows.length) {
    renderClinicalEmptyRow(clinicalNurseTable, 4);
    return;
  }
  clinicalNurseTable.innerHTML = rows
    .map((row) => `
      <tr>
        <td>${escapeHtml(formatDate(row.date) || '-')}</td>
        <td>${escapeHtml(row.vitals)}</td>
        <td>${escapeHtml(formatCareModeLabel(row.mode || '-'))}</td>
        <td>${escapeHtml(row.care)}</td>
      </tr>
    `)
    .join('');
}

function renderClinicalDoctorRecords(record) {
  if (!clinicalDoctorTable) return;
  const rows = record?.doctorRows || [];
  if (!rows.length) {
    renderClinicalEmptyRow(clinicalDoctorTable, 5);
    return;
  }
  clinicalDoctorTable.innerHTML = rows
    .map((row) => {
      const canEdit = currentEmployee?.role === 'doctor';
      const action = canEdit
        ? `<button class="ghost" type="button" data-encounter-edit="${escapeHtml(row.encounterId)}">${escapeHtml(t('records.editEncounter'))}</button>`
        : '-';
      return `
        <tr>
          <td>${escapeHtml(formatDate(row.date) || '-')}</td>
          <td>${escapeHtml(row.complaint)}</td>
          <td>${escapeHtml(row.diagnoses)}</td>
          <td>${escapeHtml(row.prescriptionType)}</td>
          <td>${action}</td>
        </tr>
      `;
    })
    .join('');
}

function renderClinicalExamRequests(record) {
  if (!clinicalExamRequestsTable) return;
  let rows = record?.examRequests || [];
  if (currentEmployee?.role === 'lab') {
    rows = rows.filter((row) => row.bucket === 'lab');
  } else if (currentEmployee?.role === 'radiology') {
    rows = rows.filter((row) => row.bucket === 'imaging');
  }
  if (!rows.length) {
    renderClinicalEmptyRow(clinicalExamRequestsTable, 6);
    return;
  }
  clinicalExamRequestsTable.innerHTML = rows
    .map((row) => `
      <tr>
        <td>${escapeHtml(formatDate(row.prescribedAt) || '-')}</td>
        <td>${escapeHtml(row.serviceName)}</td>
        <td>${escapeHtml(row.categoryLabel)}</td>
        <td>${escapeHtml(row.isPaid ? t('records.paid') : t('records.unpaid'))}</td>
        <td>${escapeHtml(formatClinicalResultStatus(row.status))}</td>
        <td>${escapeHtml(row.doctorName)}</td>
      </tr>
    `)
    .join('');
}

function populateClinicalExamRequestOptions(record) {
  if (!clinicalExamRequestSelect) return;
  const currentValue = clinicalExamRequestSelect.value;
  const role = currentEmployee?.role;
  let rows = record?.examRequests || [];
  if (role === 'lab') {
    rows = rows.filter((row) => row.bucket === 'lab' && row.isPaid);
  } else if (role === 'radiology') {
    rows = rows.filter((row) => row.bucket === 'imaging' && row.isPaid);
  } else {
    rows = [];
  }
  clinicalExamRequestSelect.innerHTML = `<option value="">${t('records.selectRequest')}</option>`;
  rows.forEach((row) => {
    const option = document.createElement('option');
    option.value = row.id;
    option.textContent = `${formatDate(row.prescribedAt)} · ${row.serviceName}`;
    clinicalExamRequestSelect.appendChild(option);
  });
  clinicalExamRequestSelect.value = currentValue && rows.some((row) => row.id == currentValue) ? currentValue : '';
  const selected = rows.find((row) => row.id === clinicalExamRequestSelect.value);
  if (clinicalExamStatus) clinicalExamStatus.value = selected?.status && selected.status !== 'unpaid' ? selected.status : 'pending';
  if (clinicalExamResult) clinicalExamResult.value = selected?.resultText || '';
  if (clinicalExamComment) clinicalExamComment.value = selected?.comment || '';
}

function getLabModuleRoleFilter() {
  return currentEmployee?.role === 'radiology' ? 'radiology' : 'lab';
}

function canProcessClinicalRequest(request) {
  return !!request && (request.isPaid || ['in_progress', 'completed', 'validated'].includes(request.status));
}

function canEditLabResults() {
  return ['lab', 'radiology'].includes(currentEmployee?.role || '');
}

function getClinicalRequestById(requestId, roleFilter = '') {
  if (!requestId) return null;
  const filter = roleFilter || getLabModuleRoleFilter();
  return getClinicalExamRequests(filter).find((entry) => entry.id === requestId) || null;
}

function saveClinicalResultForRequest(request, options = {}) {
  if (!request) return { ok: false, reason: 'missing' };
  if (!canProcessClinicalRequest(request)) return { ok: false, reason: 'locked' };
  const status = options.status || 'pending';
  const resultText = options.resultText || '';
  const comment = options.comment || '';
  const [encounterId, serviceId] = request.id.split('::');
  const results = loadClinicalResults();
  const existingIndex = results.findIndex((entry) => entry.encounterId === encounterId && entry.serviceId === serviceId);
  const previous = existingIndex >= 0 ? results[existingIndex] : null;
  const payload = {
    id: previous?.id || `RES-${Date.now()}`,
    patientId: request.patientId,
    encounterId,
    serviceId,
    serviceName: request.serviceName,
    category: request.category,
    categoryLabel: request.categoryLabel,
    kind: request.bucket,
    status,
    resultText,
    comment,
    supplies: Array.isArray(options.supplies) ? options.supplies : (previous?.supplies || []),
    stockAppliedAt: options.stockAppliedAt !== undefined ? options.stockAppliedAt : (previous?.stockAppliedAt || ''),
    recordedBy: currentEmployee?.name || currentEmployee?.code || '',
    createdAt: previous?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  if (existingIndex >= 0) {
    results[existingIndex] = payload;
  } else {
    results.push(payload);
  }
  saveClinicalResults(results);
  refreshClinicalRecordsIfVisible();
  refreshLabModuleIfVisible();
  refreshDashboardIfVisible();
  return { ok: true, payload };
}

function getLabModuleRequests() {
  const roleFilter = getLabModuleRoleFilter();
  const query = normalizeLabel(labRequestSearch?.value || '');
  const statusFilter = labStatusFilter?.value || 'all';
  let rows = getClinicalExamRequests(roleFilter);
  if (query) {
    rows = rows.filter((row) => [row.patientName, row.serviceName, row.categoryLabel, row.doctorName]
      .map((value) => normalizeLabel(value || ''))
      .some((value) => value.includes(query)));
  }
  if (statusFilter === 'eligible') {
    rows = rows.filter((row) => canProcessClinicalRequest(row));
  } else if (statusFilter === 'unpaid') {
    rows = rows.filter((row) => !row.isPaid);
  } else if (statusFilter !== 'all') {
    rows = rows.filter((row) => row.status === statusFilter);
  }
  return rows;
}

function renderLabRequestSummary(request) {
  if (!labRequestSummaryGrid) return;
  if (!request) {
    pendingLabSupplies = [];
    renderClinicalInfoGrid(labRequestSummaryGrid, [{ label: t('labModule.requestSummaryTitle'), value: t('labModule.noRequestSelected') }]);
    if (labResultStatus) labResultStatus.value = 'pending';
    if (labResultText) labResultText.value = '';
    if (labResultComment) labResultComment.value = '';
    if (labStockItem) labStockItem.value = '';
    if (labStockQty) labStockQty.value = '1';
    renderLabSupplyList();
    populateLabStockOptions();
    if (openLabPatientRecordBtn) openLabPatientRecordBtn.disabled = true;
    if (saveLabResultBtn) saveLabResultBtn.disabled = true;
    if (validateLabResultBtn) validateLabResultBtn.disabled = true;
    if (addLabSupplyBtn) addLabSupplyBtn.disabled = true;
    if (labStockItem) labStockItem.disabled = true;
    if (labStockQty) labStockQty.disabled = true;
    return;
  }
  renderClinicalInfoGrid(labRequestSummaryGrid, [
    { label: t('labModule.queuePatient'), value: request.patientName || '-' },
    { label: t('records.requestService'), value: request.serviceName || '-' },
    { label: t('records.requestCategory'), value: request.categoryLabel || '-' },
    { label: t('records.requestPaid'), value: request.isPaid ? t('records.paid') : t('records.unpaid') },
    { label: t('records.requestDate'), value: formatDate(request.prescribedAt) || '-' },
    { label: t('records.requestProvider'), value: request.doctorName || '-' },
  ]);
  pendingLabSupplies = Array.isArray(request.supplies)
    ? request.supplies.map((item) => ({ ...item }))
    : [];
  if (labResultStatus) labResultStatus.value = request.status && request.status !== 'unpaid' ? request.status : 'pending';
  if (labResultText) labResultText.value = request.resultText || '';
  if (labResultComment) labResultComment.value = request.comment || '';
  if (labStockQty) labStockQty.value = '1';
  renderLabSupplyList();
  populateLabStockOptions();
  if (openLabPatientRecordBtn) openLabPatientRecordBtn.disabled = !request.patientId;
  const editable = canEditLabResults() && canProcessClinicalRequest(request);
  if (saveLabResultBtn) saveLabResultBtn.disabled = !editable;
  if (validateLabResultBtn) validateLabResultBtn.disabled = !editable;
  if (addLabSupplyBtn) addLabSupplyBtn.disabled = !editable;
  if (labStockItem) labStockItem.disabled = !editable;
  if (labStockQty) labStockQty.disabled = !editable;
}

function renderLabRequestsTable(rows) {
  if (!labRequestsTableBody) return;
  if (!rows.length) {
    renderClinicalEmptyRow(labRequestsTableBody, 8);
    return;
  }
  labRequestsTableBody.innerHTML = rows.map((row) => {
    const actionDisabled = canProcessClinicalRequest(row) ? '' : 'disabled';
    return `
      <tr>
        <td>${escapeHtml(row.patientName || '-')}</td>
        <td>${escapeHtml(row.serviceName || '-')}</td>
        <td>${escapeHtml(row.categoryLabel || '-')}</td>
        <td>${escapeHtml(row.isPaid ? t('records.paid') : t('records.unpaid'))}</td>
        <td>${escapeHtml(formatClinicalResultStatus(row.status))}</td>
        <td>${escapeHtml(formatDate(row.prescribedAt) || '-')}</td>
        <td>${escapeHtml(row.doctorName || '-')}</td>
        <td><button class="ghost" type="button" data-lab-request-id="${escapeHtml(row.id)}" ${actionDisabled}>${escapeHtml(t('labModule.openRequest'))}</button></td>
      </tr>
    `;
  }).join('');
}

function renderLabHistoryTable(requests) {
  if (!labHistoryTableBody) return;
  const requestIds = new Set(requests.map((row) => row.id));
  const patientMap = new Map(loadPatients().map((patient) => [patient.id, fullPatientName(patient)]));
  const rows = loadClinicalResults()
    .filter((entry) => {
      const bucket = entry.kind || getDashboardCategoryBucket(entry.category || '');
      if (getLabModuleRoleFilter() === 'radiology') return bucket === 'imaging';
      return bucket === 'lab';
    })
    .filter((entry) => requestIds.size === 0 || requestIds.has(`${entry.encounterId}::${entry.serviceId}`))
    .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
  if (!rows.length) {
    renderClinicalEmptyRow(labHistoryTableBody, 6);
    return;
  }
  labHistoryTableBody.innerHTML = rows.map((row) => `
    <tr>
      <td>${escapeHtml(formatDate(row.updatedAt || row.createdAt) || '-')}</td>
      <td>${escapeHtml(patientMap.get(row.patientId) || '-')}</td>
      <td>${escapeHtml(row.serviceName || '-')}</td>
      <td>${escapeHtml(formatClinicalResultStatus(row.status))}</td>
      <td>${escapeHtml(row.resultText || t('records.none'))}</td>
      <td>${escapeHtml(row.recordedBy || '-')}</td>
    </tr>
  `).join('');
}

function renderLabModule() {
  if (!labModuleView) return;
  const allRequests = getClinicalExamRequests(getLabModuleRoleFilter());
  const filteredRequests = getLabModuleRequests();
  if (labModuleRequested) labModuleRequested.textContent = allRequests.length.toString();
  if (labModuleEligible) labModuleEligible.textContent = allRequests.filter((row) => canProcessClinicalRequest(row)).length.toString();
  if (labModuleValidated) labModuleValidated.textContent = allRequests.filter((row) => row.status === 'validated').length.toString();
  if (activeLabRequestId && !allRequests.some((row) => row.id === activeLabRequestId)) {
    activeLabRequestId = '';
  }
  if (!activeLabRequestId && filteredRequests.length) {
    activeLabRequestId = (filteredRequests.find((row) => canProcessClinicalRequest(row)) || filteredRequests[0]).id;
  }
  renderLabRequestsTable(filteredRequests);
  const selectedRequest = allRequests.find((row) => row.id === activeLabRequestId) || null;
  renderLabRequestSummary(selectedRequest);
  renderLabHistoryTable(filteredRequests.length ? filteredRequests : allRequests);
  if (labRequestMessage) {
    if (!filteredRequests.length) {
      labRequestMessage.textContent = t('labModule.noQueue');
    } else if (selectedRequest && !canProcessClinicalRequest(selectedRequest)) {
      labRequestMessage.textContent = t('labModule.lockedRequest');
    } else if (!canEditLabResults()) {
      labRequestMessage.textContent = t('labModule.readOnly');
    } else {
      labRequestMessage.textContent = '';
    }
  }
  if (labResultMessage && (!selectedRequest || !labResultMessage.dataset.persist)) {
    labResultMessage.textContent = '';
    delete labResultMessage.dataset.persist;
  }
}

function refreshLabModuleIfVisible() {
  if (labModuleView && !labModuleView.classList.contains('hidden')) {
    renderLabModule();
  }
}

function renderDoctorExamResults() {
  if (!doctorLabResultsTable) return;
  const encounterIds = new Set(loadEncounters().filter((encounter) => matchesCurrentEmployeeProvider(encounter)).map((encounter) => encounter.id));
  const patientMap = new Map(loadPatients().map((patient) => [patient.id, fullPatientName(patient)]));
  const rows = loadClinicalResults()
    .filter((entry) => encounterIds.has(entry.encounterId))
    .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0))
    .slice(0, 8);
  if (!rows.length) {
    renderClinicalEmptyRow(doctorLabResultsTable, 5);
    return;
  }
  doctorLabResultsTable.innerHTML = rows.map((row) => `
    <tr>
      <td>${escapeHtml(formatDate(row.updatedAt || row.createdAt) || '-')}</td>
      <td>${escapeHtml(patientMap.get(row.patientId) || '-')}</td>
      <td>${escapeHtml(row.serviceName || '-')}</td>
      <td>${escapeHtml(formatClinicalResultStatus(row.status))}</td>
      <td>${escapeHtml(row.resultText || t('records.none'))}</td>
    </tr>
  `).join('');
}

function renderClinicalResultsTable(record) {
  if (!clinicalResultsTable) return;
  let rows = record?.results || [];
  if (currentEmployee?.role === 'lab') {
    rows = rows.filter((row) => row.kind === 'lab' || row.bucket === 'lab');
  } else if (currentEmployee?.role === 'radiology') {
    rows = rows.filter((row) => row.kind === 'imaging' || row.bucket === 'imaging');
  }
  if (!rows.length) {
    renderClinicalEmptyRow(clinicalResultsTable, 7);
    return;
  }
  clinicalResultsTable.innerHTML = rows
    .map((row) => `
      <tr>
        <td>${escapeHtml(formatDate(row.updatedAt || row.createdAt) || '-')}</td>
        <td>${escapeHtml(row.serviceName || '-')}</td>
        <td>${escapeHtml(row.categoryLabel || getServiceCategoryLabel(row.category || ''))}</td>
        <td>${escapeHtml(formatClinicalResultStatus(row.status))}</td>
        <td>${escapeHtml(row.resultText || t('records.none'))}</td>
        <td>${escapeHtml(row.comment || t('records.none'))}</td>
        <td>${escapeHtml(row.recordedBy || '-')}</td>
      </tr>
    `)
    .join('');
}

function renderClinicalPrescriptions(record) {
  if (!clinicalPrescriptionTable) return;
  const rows = record?.prescriptionRows || [];
  if (!rows.length) {
    renderClinicalEmptyRow(clinicalPrescriptionTable, 5);
    return;
  }
  clinicalPrescriptionTable.innerHTML = rows
    .map((row) => `
      <tr>
        <td>${escapeHtml(formatDate(row.date) || '-')}</td>
        <td>${escapeHtml(row.type)}</td>
        <td>${escapeHtml(row.medications)}</td>
        <td>${escapeHtml(row.tests)}</td>
        <td>${escapeHtml(row.provider)}</td>
      </tr>
    `)
    .join('');
}

function renderClinicalBilling(record) {
  if (!clinicalBillingTable) return;
  const rows = record?.billingRows || [];
  if (!rows.length) {
    renderClinicalEmptyRow(clinicalBillingTable, 7);
    return;
  }
  clinicalBillingTable.innerHTML = rows
    .map((row) => `
      <tr>
        <td>${escapeHtml(row.receiptId || '-')}</td>
        <td>${escapeHtml(formatDate(row.date) || '-')}</td>
        <td>${escapeHtml(formatCfl(row.total || 0))}</td>
        <td>${escapeHtml(formatCfl(row.insurance || 0))}</td>
        <td>${escapeHtml(formatCfl(row.patient || 0))}</td>
        <td>${escapeHtml(formatPaymentMethodLabel(row.paymentMethod))}</td>
        <td>${escapeHtml(row.cashier || '-')}</td>
      </tr>
    `)
    .join('');
}

function clearClinicalRecordPanels() {
  renderClinicalRecordSummary(null);
  if (clinicalIdentityGrid) clinicalIdentityGrid.innerHTML = '';
  if (clinicalSocioGrid) clinicalSocioGrid.innerHTML = '';
  if (clinicalAntecedents) clinicalAntecedents.value = '';
  if (clinicalNotes) clinicalNotes.value = '';
  renderClinicalEmptyRow(clinicalEncounterTable, 5);
  renderClinicalEmptyRow(clinicalNurseTable, 4);
  renderClinicalEmptyRow(clinicalDoctorTable, 5);
  renderClinicalEmptyRow(clinicalExamRequestsTable, 6);
  renderClinicalEmptyRow(clinicalResultsTable, 7);
  renderClinicalEmptyRow(clinicalPrescriptionTable, 5);
  renderClinicalEmptyRow(clinicalBillingTable, 7);
  if (clinicalExamRequestSelect) clinicalExamRequestSelect.innerHTML = `<option value="">${t('records.selectRequest')}</option>`;
  if (clinicalExamResult) clinicalExamResult.value = '';
  if (clinicalExamComment) clinicalExamComment.value = '';
}

function renderClinicalRecord() {
  if (!clinicalRecordsView) return;
  filterClinicalSectionsByRole();
  const matches = getClinicalPatientMatches(clinicalPatientSearch?.value || '');
  renderClinicalPatientResults(matches);
  if (clinicalPatientMessage) {
    clinicalPatientMessage.textContent = matches.length ? '' : t('billing.patientNotFound');
  }
  if (activeClinicalPatientId && !matches.some((patient) => patient.id === activeClinicalPatientId)) {
    activeClinicalPatientId = matches[0]?.id || null;
  }
  if (!activeClinicalPatientId && matches.length) {
    activeClinicalPatientId = matches[0].id;
  }
  if (!activeClinicalPatientId) {
    clearClinicalRecordPanels();
    return;
  }
  const record = collectClinicalRecord(activeClinicalPatientId);
  renderClinicalRecordSummary(record);
  renderClinicalIdentity(record);
  renderClinicalHistory(record);
  renderClinicalEncounterHistory(record);
  renderClinicalNurseAssessments(record);
  renderClinicalDoctorRecords(record);
  renderClinicalExamRequests(record);
  populateClinicalExamRequestOptions(record);
  renderClinicalResultsTable(record);
  renderClinicalPrescriptions(record);
  renderClinicalBilling(record);
}

function refreshClinicalRecordsIfVisible() {
  if (clinicalRecordsView && !clinicalRecordsView.classList.contains('hidden')) {
    renderClinicalRecord();
  }
}

function renderReports() {
  const receipts = loadReceipts();
  const counts = getServiceCounts(receipts);
  if (reportConsultations) reportConsultations.textContent = counts.consultation.toString();
  if (reportLab) reportLab.textContent = counts.lab.toString();
  if (reportImaging) reportImaging.textContent = counts.imaging.toString();
  if (reportHospital) reportHospital.textContent = counts.hospitalization.toString();
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

  renderInsuranceStatementsSection();
  renderInsuranceReceivablesSection();
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
      subtitle: 'Create services, insurer tariffs, and billing references by category.',
      name: 'Services / Procedure / Medication',
      category: 'Category',
      code: 'Service code',
      inamCode: 'INAM code',
      uninsuredPrice: 'Uninsured price (CFL)',
      insuranceTitle: 'Insurance-specific pricing',
      insuranceHelp:
        'Each partner insurer appears automatically. Enter the clinic price and reimbursement base for each one.',
      insurancePrice: 'Insured price (CFL)',
      insuranceBase: 'Reimbursement base',
      insuranceEmpty: 'No insurance prices added yet.',
      insuranceRequired: 'Complete the service code, INAM code, and uninsured price.',
      save: 'Save service',
      saved: 'Service saved.',
      cancelEdit: 'Cancel edit',
      edit: 'Edit',
      editLoaded: 'Service loaded for editing.',
      required: 'Please enter the service name, category, code, INAM code, and uninsured price.',
      empty: 'No services yet. Add your first service.',
      delete: 'Remove',
      listCategory: 'Category',
      listService: 'Services / Procedure / Medication',
      listCode: 'Code',
      listInam: 'Code INAM',
      listUninsured: 'Uninsured price',
      listInsuredPrice: 'Insured price',
      listBase: 'Reimbursement base',
      listPartner: 'Insurer',
      actions: 'Actions',
      insuranceListPartner: 'Insurer',
      insuranceListPrice: 'Insured price',
      insuranceListBase: 'Reimbursement base',
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
      overviewTitle: 'Operational overview',
      overviewSubtitle: 'Daily and monthly indicators, activity mix, and trend analysis.',
      trendMetric: 'Trend metric',
      metricPatients: 'Patients',
      metricRevenue: 'Revenue',
      metricServices: 'Services billed',
      metricHospitalizations: 'Hospitalizations',
      metricLabImaging: 'Laboratory / imaging',
      metricPrescriptions: 'Prescriptions',
      metricStock: 'Stock consumption',
      daySummary: 'Today',
      monthSummary: 'This month',
      activityByCategory: 'Activities by category',
      activityByService: 'Activities by service',
      tableCategory: 'Category',
      tableToday: 'Today',
      tableMonth: 'This month',
      tableAmount: 'Amount',
      tableService: 'Services / Procedure / Medication',
      monthlyTrend: 'Monthly trend (current year)',
      yearlyTrend: 'Multi-year comparison',
      adminSectionTitle: 'Administrator overview',
      directorTitle: 'Executive overview',
      staffConfigured: 'Configured staff',
      servicesConfigured: 'Configured services',
      insurersConfigured: 'Insurance partners',
      admissionsTodayCard: 'Admissions today',
      staffMix: 'Staff distribution',
      hrTitle: 'HR overview',
      hrTotalStaff: 'Total staff',
      hrPermanent: 'Permanent staff',
      hrLocum: 'Locum staff',
      hrPayrollEstimate: 'Estimated payroll due',
      metricPatientsRegistered: 'Patients registered',
      metricConsultationsCompleted: 'Consultations completed',
      metricBilledServices: 'Billed services',
      metricTotalBilled: 'Total billed',
      metricCollected: 'Amount collected',
      metricInsurancePart: 'Insurance share',
      metricPatientPart: 'Patient share',
      metricAdmissions: 'Admissions',
      metricStockConsumption: 'Stock consumption',
      roleLabel: 'Role: {role}',
      role: 'Role',
      count: 'Count',
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
      selectEncounter: 'Patient encounter',
      selectEncounterRequired: 'Select a patient encounter first.',
      prescriptionType: 'Prescription option',
      prescriptionOutpatientCare: 'Outpatient care',
      prescriptionDay: 'Day hospitalization',
      prescriptionFull: 'Full hospitalization',
      prescriptionOutpatientRx: 'Outpatient prescription',
      complaint: 'Reason for consultation / complaint',
      symptoms: 'Functional signs / symptoms',
      examSummary: 'Clinical examination summary',
      diagnosis1: 'Diagnostic hypothesis 1',
      diagnosis2: 'Diagnostic hypothesis 2',
      diagnosis3: 'Diagnostic hypothesis 3',
      requiredTests: 'Required tests / investigations',
      stockMedication: 'Medication / consumable',
      stockQty: 'Quantity',
      addMedication: 'Add medication',
      saveConsultation: 'Save consultation',
      medicationRequired: 'Select a stock item and quantity.',
      doctorSaved: 'Consultation saved.',
      nurseTitle: 'Nursing overview',
      nursePatients: 'Assigned patients',
      nurseTasks: 'Tasks completed today',
      nurseMonthly: 'Monthly activity',
      hospitalizationMode: 'Care mode',
      modeOutpatient: 'Outpatient',
      modeDay: 'Day hospitalization',
      modeFull: 'Full hospitalization',
      temp: 'Temperature',
      bpRight: 'BP right arm',
      bpLeft: 'BP left arm',
      weight: 'Weight',
      height: 'Height',
      waist: 'Waist circumference',
      pulse: 'Pulse',
      roomNumber: 'Room number',
      bedNumber: 'Bed number',
      nursingCare: 'Care provided',
      nurseStock: 'Medication / consumable used',
      nurseStockQty: 'Quantity',
      addSupply: 'Add supply',
      saveVitals: 'Save vitals and care',
      nurseSaved: 'Vitals and nursing care saved.',
      labTitle: 'Laboratory overview',
      labPending: 'Tests pending',
      labInProgress: 'In progress',
      labCompleted: 'Completed',
      radiologyTitle: 'Imaging overview',
      radioScheduled: 'Exams scheduled',
      radioCompleted: 'Exams completed',
      pharmacyTitle: 'Pharmacy overview',
      pharmacyPending: 'Prescriptions pending',
      pharmacyDispensed: 'Medications dispensed',
      pharmacyAlerts: 'Stock alerts',
      pharmacyQueueTitle: 'Dispensing queue',
      pharmacyQueuePrescription: 'Prescription',
      pharmacyQueuePending: 'Pending dispense',
      pharmacyQueueDispensed: 'Dispensed',
      pharmacyDispenseAction: 'Mark dispensed',
      action: 'Action',
      accountTitle: 'Finance overview',
      revenue: 'Total revenue',
      patientShare: 'Patient payments',
      insuranceShare: 'Insurance payments',
      outstanding: 'Outstanding balances',
      cashPayments: 'Cash payments',
      bankPayments: 'Bank transfer payments',
      adminTitle: 'Management overview',
      totalServices: 'Service utilization',
      staffProductivity: 'Staff productivity',
      doctorPayments: 'Doctor payments (locum)',
      amount: 'Amount',
      patient: 'Patient',
      doctorExamResults: 'Recent examination results',
      noData: 'No data yet.',
      unknownStaff: 'Unknown staff',
      otherTitle: 'General overview',
      otherSubtitle: 'Your dashboard will appear here once your role is configured.',
    },
    records: {
      title: 'Clinical records',
      subtitle: 'Consolidated patient history, clinical documentation, tests, prescriptions, and related billing.',
      patientLookupTitle: 'Patient lookup',
      patientSearch: 'Search patient',
      patientSearchPlaceholder: 'Search by name, identifier, or phone',
      noPatientSelected: 'No patient selected',
      selectPatientHint: 'Select a patient to open the clinical record.',
      identityTitle: 'Identity and administrative data',
      socioTitle: 'Sociodemographic profile',
      historyTitle: 'Medical history and antecedents',
      antecedents: 'Antecedents',
      clinicalNotes: 'Clinical notes',
      saveHistory: 'Save history',
      timelineTitle: 'Care pathway history',
      timelineDate: 'Date',
      timelineProvider: 'Provider',
      timelineStatus: 'Status',
      timelineServices: 'Services',
      timelinePayment: 'Payment',
      nurseTitle: 'Nursing assessments',
      nurseDate: 'Date',
      nurseVitals: 'Vitals',
      nurseMode: 'Care mode',
      nurseCare: 'Care provided',
      doctorTitle: 'Doctor clinical record',
      doctorDate: 'Date',
      doctorComplaint: 'Complaint',
      doctorDiagnoses: 'Diagnostic hypotheses',
      doctorPrescription: 'Orientation / prescription',
      doctorAction: 'Action',
      requestedTestsTitle: 'Requested tests and investigations',
      requestDate: 'Date',
      requestService: 'Service',
      requestCategory: 'Category',
      requestPaid: 'Paid',
      requestStatus: 'Status',
      requestProvider: 'Prescriber',
      resultEntryTitle: 'Record exam result',
      resultRequest: 'Requested exam',
      resultStatus: 'Result status',
      resultText: 'Result',
      resultComment: 'Comment',
      saveResult: 'Save result',
      resultsTitle: 'Laboratory and imaging results',
      resultDate: 'Date',
      resultService: 'Service',
      resultCategory: 'Category',
      resultValue: 'Result',
      resultBy: 'Recorded by',
      prescriptionTitle: 'Prescriptions and care plan',
      prescriptionDate: 'Date',
      prescriptionType: 'Type',
      prescriptionMeds: 'Medications',
      prescriptionTests: 'Tests',
      billingTitle: 'Invoices and payments',
      billingReceipt: 'Receipt',
      billingDate: 'Date',
      billingTotal: 'Total',
      billingInsurance: 'Insurance share',
      billingPatient: 'Patient share',
      billingMethod: 'Payment method',
      billingCashier: 'Recorded by',
      labelIdentifier: 'Identifier',
      labelSex: 'Sex',
      labelDob: 'Date of birth',
      labelAge: 'Age',
      labelPhone: 'Phone',
      labelWhatsapp: 'WhatsApp',
      labelAddress: 'Address',
      labelProfession: 'Profession',
      labelEducation: 'Education level',
      labelInsurance: 'Insurance',
      labelCoverage: 'Coverage',
      labelExpiry: 'Card expiry',
      labelProvider: 'Assigned provider',
      labelRegisteredAt: 'Registered on',
      labelUpdatedAt: 'Updated on',
      labelVisits: 'Visits',
      labelConsultations: 'Consultations',
      labelHospitalizations: 'Hospitalizations',
      labelInvoices: 'Invoices',
      historySaved: 'Clinical history updated.',
      resultSaved: 'Exam result saved.',
      selectRequest: 'Select a requested exam',
      uninsured: 'Uninsured',
      paid: 'Paid',
      unpaid: 'Not paid',
      encounterRegistered: 'Registered',
      encounterNurseCompleted: 'Nurse completed',
      encounterDoctorCompleted: 'Doctor completed',
      encounterAwaitingResults: 'Awaiting results',
      encounterResultsValidated: 'Results validated',
      encounterPharmacyDispensed: 'Medication dispensed',
      statusPending: 'Pending',
      statusInProgress: 'In progress',
      statusCompleted: 'Completed',
      statusValidated: 'Validated',
      editEncounter: 'Edit encounter',
      none: 'None',
    },
    labModule: {
      title: 'Laboratory module',
      subtitle: 'Review prescribed analyses, confirm payment eligibility, record findings, and validate results.',
      kpiRequested: 'Prescribed analyses',
      kpiEligible: 'Paid / eligible',
      kpiValidated: 'Validated results',
      filtersTitle: 'Request filters',
      search: 'Search',
      searchPlaceholder: 'Search by patient, service, or prescriber',
      statusFilter: 'Queue filter',
      filterAll: 'All requests',
      filterEligible: 'Paid / eligible only',
      requestSummaryTitle: 'Selected request',
      queueTitle: 'Prescribed analyses',
      queuePatient: 'Patient',
      queueAction: 'Action',
      openRequest: 'Open',
      openPatientRecord: 'Open patient record',
      resultEntryTitle: 'Result entry and validation',
      stockUsageTitle: 'Stock consumption',
      stockItem: 'Reagent / consumable',
      stockQty: 'Quantity',
      addSupply: 'Add consumption',
      stockUsageRequired: 'Select a reagent / consumable and a valid quantity.',
      validateResult: 'Validate result',
      historyTitle: 'Result history',
      noQueue: 'No laboratory request matches the current filters.',
      noRequestSelected: 'No request selected',
      lockedRequest: 'Only paid or already validated requests can be processed.',
      readOnly: 'This profile has read-only access to the laboratory queue.',
      resultRequired: 'Enter a result before validating the request.',
      resultValidated: 'Result validated and shared with the patient record.',
    },
    records: {
      title: 'Dossiers cliniques',
      subtitle: 'Historique consolidé du patient, documentation clinique, examens, prescriptions et facturation liée.',
      patientLookupTitle: 'Recherche patient',
      patientSearch: 'Rechercher un patient',
      patientSearchPlaceholder: 'Rechercher par nom, identifiant ou téléphone',
      noPatientSelected: 'Aucun patient sélectionné',
      selectPatientHint: 'Sélectionnez un patient pour ouvrir le dossier clinique.',
      identityTitle: 'Identité et données administratives',
      socioTitle: 'Profil sociodémographique',
      historyTitle: 'Antécédents et histoire clinique',
      antecedents: 'Antécédents',
      clinicalNotes: 'Notes cliniques',
      saveHistory: 'Enregistrer l’historique',
      timelineTitle: 'Historique du parcours de soins',
      timelineDate: 'Date',
      timelineProvider: 'Soignant',
      timelineStatus: 'Statut',
      timelineServices: 'Services',
      timelinePayment: 'Paiement',
      nurseTitle: 'Constantes et soins infirmiers',
      nurseDate: 'Date',
      nurseVitals: 'Constantes',
      nurseMode: 'Mode de prise en charge',
      nurseCare: 'Soins réalisés',
      doctorTitle: 'Dossier clinique du médecin',
      doctorDate: 'Date',
      doctorComplaint: 'Motif / plainte',
      doctorDiagnoses: 'Hypothèses diagnostiques',
      doctorPrescription: 'Orientation / prescription',
      doctorAction: 'Action',
      requestedTestsTitle: 'Examens et investigations demandés',
      requestDate: 'Date',
      requestService: 'Service',
      requestCategory: 'Catégorie',
      requestPaid: 'Payé',
      requestStatus: 'Statut',
      requestProvider: 'Prescripteur',
      resultEntryTitle: 'Saisir un résultat',
      resultRequest: 'Examen demandé',
      resultStatus: 'Statut du résultat',
      resultText: 'Résultat',
      resultComment: 'Commentaire',
      saveResult: 'Enregistrer le résultat',
      resultsTitle: 'Résultats de laboratoire et d’imagerie',
      resultDate: 'Date',
      resultService: 'Service',
      resultCategory: 'Catégorie',
      resultValue: 'Résultat',
      resultBy: 'Saisi par',
      prescriptionTitle: 'Prescriptions et plan de soins',
      prescriptionDate: 'Date',
      prescriptionType: 'Type',
      prescriptionMeds: 'Médicaments',
      prescriptionTests: 'Examens',
      billingTitle: 'Factures et paiements',
      billingReceipt: 'Reçu',
      billingDate: 'Date',
      billingTotal: 'Total',
      billingInsurance: 'Part assurance',
      billingPatient: 'Part patient',
      billingMethod: 'Mode de paiement',
      billingCashier: 'Saisi par',
      labelIdentifier: 'Identifiant',
      labelSex: 'Sexe',
      labelDob: 'Date de naissance',
      labelAge: 'Âge',
      labelPhone: 'Téléphone',
      labelWhatsapp: 'WhatsApp',
      labelAddress: 'Adresse',
      labelProfession: 'Profession',
      labelEducation: 'Niveau d’instruction',
      labelInsurance: 'Assurance',
      labelCoverage: 'Couverture',
      labelExpiry: 'Expiration carte',
      labelProvider: 'Soignant référent',
      labelRegisteredAt: 'Créé le',
      labelUpdatedAt: 'Mis à jour le',
      labelVisits: 'Visites',
      labelConsultations: 'Consultations',
      labelHospitalizations: 'Hospitalisations',
      labelInvoices: 'Factures',
      historySaved: 'Historique clinique mis à jour.',
      resultSaved: 'Résultat enregistré.',
      selectRequest: 'Sélectionnez un examen demandé',
      uninsured: 'Non assuré',
      paid: 'Payé',
      unpaid: 'Non payé',
      encounterRegistered: 'Enregistré',
      encounterNurseCompleted: 'Évaluation infirmière terminée',
      encounterDoctorCompleted: 'Consultation médecin terminée',
      statusPending: 'En attente',
      statusInProgress: 'En cours',
      statusCompleted: 'Terminé',
      statusValidated: 'Validé',
      editEncounter: 'Modifier la consultation',
      none: 'Aucun',
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
      firstName: 'First name',
      lastName: 'Last name',
      dob: 'Date of birth',
      sex: 'Sex',
      contractStart: 'Contract start date',
      fullName: 'Full name',
      role: 'Role',
      roleAdmission: 'Admission / Medical secretary',
      roleAdmin: 'Administrator',
      roleDirector: 'Director',
      roleAccountant: 'Accountant',
      roleDoctor: 'Doctor',
      roleLab: 'Laboratory staff',
      roleNurse: 'Nurse',
      roleRadiology: 'Radiology staff',
      rolePharmacy: 'Pharmacy staff',
      roleHr: 'Human resources',
      roleOther: 'Other',
      employmentType: 'Employment type',
      employmentPermanent: 'Permanent',
      employmentLocum: 'Locum (vacataire)',
      locumRate: 'Locum rate (%)',
      position: 'Position / function',
      staffStatus: 'Staff status',
      statusActive: 'Active',
      statusOnLeave: 'On leave',
      statusSuspended: 'Suspended',
      statusInactive: 'Inactive',
      payMode: 'Pay mode',
      paySalary: 'Contract salary',
      payPercentage: 'Percentage on services',
      contractSalary: 'Contract salary (CFL)',
      employeeSocialRate: 'Employee social rate (%)',
      employerSocialRate: 'Employer social rate (%)',
      otherDeductions: 'Other deductions (CFL)',
      socialId: 'Social / administrative reference',
      notes: 'Administrative notes',
      email: 'Email',
      countryCode: 'Country code',
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
      listPosition: 'Position',
      listContract: 'Contract',
      listPayMode: 'Pay mode',
      listStatus: 'Status',
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
        salaryRequired: 'Please enter the contractual salary for permanent staff.',
      },
    },
    hrPayroll: {
      title: 'HR & payroll',
      subtitle: 'Review employee records, calculate payroll by period, record payments, and generate payroll statements.',
      period: 'Payroll period',
      filter: 'Filter',
      filterAll: 'All employees',
      filterPermanent: 'Permanent staff',
      filterLocum: 'Locum staff',
      filterOutstanding: 'Outstanding balances',
      filterPaid: 'Fully paid',
      totalEmployees: 'Employees in period',
      totalDue: 'Net payroll due',
      totalPaid: 'Paid in period',
      totalOutstanding: 'Outstanding balance',
      tableTitle: 'Payroll roster',
      gross: 'Gross',
      employeeSocial: 'Employee social',
      employerSocial: 'Employer social',
      netDue: 'Net due',
      paid: 'Paid',
      balance: 'Balance',
      action: 'Action',
      employeeSummary: 'Employee summary',
      noEmployeeSelected: 'Select an employee to view payroll details.',
      calculationBasis: 'Calculation basis',
      basisAssignedServices: 'Assigned services',
      basisConsultations: 'Consultations',
      basisLab: 'Laboratory analyses',
      basisImaging: 'Imaging examinations',
      basisRevenue: 'Revenue base',
      taxWithholding: 'Tax withholding',
      paymentMethod: 'Payment method',
      paymentAmount: 'Amount',
      paymentNote: 'Note',
      recordPayment: 'Record payment',
      recordPaymentBtn: 'Save payment',
      downloadStatement: 'Download statement',
      historyTitle: 'Payment history',
      openEmployee: 'Open',
      invalidPaymentAmount: 'Enter a valid amount not exceeding the outstanding balance.',
      paymentSaved: 'Payroll payment recorded.',
    },
    billing: {
      title: 'Billing & Patient Admission',
      subtitle: 'Register patients, validate insurance, and generate billing details.',
      lookupTitle: 'Patient lookup',
      admissionTitle: 'Patient admission',
      newPatient: 'New patient',
      returningPatient: 'Returning patient',
      patientSearch: 'Search patient',
      patientSearchPlaceholder: 'Search by name or phone number',
      createPatient: 'Create new patient profile',
      patientNotFound: 'No patient found. Create a new profile to continue.',
      firstName: 'First name',
      lastName: 'Last name',
      fullName: 'Full name',
      sex: 'Sex',
      sexFemale: 'Female',
      sexMale: 'Male',
      sexOther: 'Other',
      dob: 'Date of birth',
      age: 'Age',
      addressCountry: 'Country',
      addressCity: 'City',
      addressDistrict: 'District / neighborhood',
      addressPostal: 'Postal code',
      countryCode: 'Country code',
      address: 'Address',
      phone: 'Phone number',
      emergencyPhone: 'Emergency contact',
      whatsapp: 'WhatsApp (if different)',
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
      insuranceTitle: 'Insurance & visit setup',
      insuranceStatus: 'Insurance status',
      insuranceYes: 'Yes',
      insuranceNo: 'No',
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
      cardExpiry: 'Card expiry date',
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
      assignDoctor: 'Assigned care provider',
      doctorPlaceholder: 'Select doctor',
      noDoctor: 'No doctors available',
      paymentMethod: 'Payment method',
      paymentCash: 'Cash',
      paymentBank: 'Bank transfer',
      patientStatus: 'Admission status',
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
      insuranceRequired: 'Complete all insurance details, including the card expiry date.',
      providerRequired: 'Select the assigned care provider before saving the patient.',
      savePatientFirst: 'Save the patient profile before adding services.',
      labList: 'Laboratory tests',
      imagingList: 'Imaging services',
      billingTitle: 'Billing items',
      item: 'Services / Procedure / Medication',
      insurerColumn: 'Insurance',
      calculatedShare: 'Calculated share',
      servicePlaceholder: 'Select a service',
      categoryPlaceholder: 'Select a category',
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
      removeLine: 'Remove last line',
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
      catalogTitle: 'Select services from the catalog',
      allCategories: 'All categories',
      categoryFilter: 'Service category',
      search: 'Search service',
      searchPlaceholder: 'Search by service name or code',
      tableSelect: 'Select',
      tableCategory: 'Category',
      tableService: 'Services / Procedure / Medication',
      tableCode: 'Code',
      tableInam: 'Code INAM',
      tableUninsured: 'Uninsured price',
      tableInsured: 'Insured price',
      tableBase: 'Reimbursement base',
      tableQty: 'Qty',
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
      statusArrived: 'Arrived',
      statusInCare: 'In care',
      statusCompleted: 'Completed',
      statusCancelled: 'Cancelled',
      openAdmission: 'Open admission',
      admissionLoaded: 'Appointment loaded into admission.',
      portalTitle: 'Online booking (patient portal)',
      portalDesc: 'Share a booking link with patients to capture appointment requests online.',
      portalLink: 'Booking link',
      copyLink: 'Copy link',
      required: 'Please complete patient, doctor, date, and time.',
      saved: 'Appointment scheduled.',
      copied: 'Booking link copied.',
    },
    inventory: {
      title: 'Purchasing, stock & orders',
      subtitle: 'Track products, stock movements, purchase orders, receptions, and low-stock alerts.',
      kpiProducts: 'Products in stock',
      kpiLow: 'Low stock alerts',
      kpiExpiring: 'Expiring soon',
      kpiOrders: 'Open purchase orders',
      addTitle: 'Register product',
      name: 'Product / designation',
      type: 'Product type',
      typeMedication: 'Medication',
      typeConsumable: 'Consumable',
      typeReagent: 'Reagent',
      typeEquipment: 'Equipment',
      typeOther: 'Other',
      supplier: 'Supplier',
      unitPrice: 'Unit cost (CFL)',
      unitCost: 'Unit purchase cost (CFL)',
      totalCost: 'Total cost',
      quantity: 'Quantity',
      minLevel: 'Minimum level',
      entryDate: 'Stock entry date',
      expiryDate: 'Expiry date',
      receipt: 'Supplier receipt',
      notes: 'Notes',
      add: 'Save product',
      listTitle: 'Stock list',
      purchaseTitle: 'Purchasing & orders',
      orderItem: 'Product / designation',
      orderQty: 'Ordered quantity',
      orderDate: 'Expected date',
      createOrder: 'Create purchase order',
      receivedQty: 'Received quantity',
      receivedDate: 'Received date',
      receiveAction: 'Receive',
      movementTitle: 'Stock movements',
      movementDate: 'Date',
      movementItem: 'Product',
      movementDirection: 'Direction',
      movementQty: 'Qty',
      movementSource: 'Source',
      movementCost: 'Cost',
      movementRecordedBy: 'Recorded by',
      directionIn: 'Inbound',
      directionOut: 'Outbound',
      movementPurchase: 'Purchase / reception',
      movementConsumption: 'Consumption',
      movementAdjustment: 'Adjustment',
      movementManual: 'Manual entry',
      sourceInventory: 'Inventory',
      sourcePurchase: 'Purchase order',
      sourceBilling: 'Billing / pharmacy',
      sourceDoctor: 'Doctor',
      sourceNurse: 'Nursing / hospitalization',
      sourceLab: 'Laboratory',
      sourceRadiology: 'Imaging',
      sourcePharmacy: 'Pharmacy',
      sourceHospitalization: 'Hospitalization',
      status: 'Status',
      statusOk: 'OK',
      statusLow: 'Low',
      statusExpiring: 'Expiring soon',
      statusExpired: 'Expired',
      statusOpen: 'Open',
      statusPartial: 'Partially received',
      statusReceived: 'Received',
      statusCancelled: 'Cancelled',
      update: 'Update',
      remove: 'Remove',
      required: 'Enter the product designation.',
      saved: 'Stock item saved.',
      poRequired: 'Complete supplier, product, and quantity.',
      poSaved: 'Purchase order created.',
      receiveRequired: 'Enter a valid received quantity that does not exceed the remaining balance.',
      receiveSaved: 'Reception recorded and stock updated.',
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
      insuranceClaimsTitle: 'Insurance claims statements',
      insuranceClaimsSubtitle: 'Generate insurer-specific claims, export supporting files, record insurer payments, and track balances.',
      insurerFilter: 'Insurer',
      periodStart: 'Period start',
      periodEnd: 'Period end',
      generateStatement: 'Generate statement',
      openEmailDraft: 'Open email draft',
      exportBordereau: 'Export bordereau',
      exportPdf: 'Export PDF',
      exportExcel: 'Export Excel',
      downloadLetter: 'Download transmittal letter',
      claimLines: 'Claim lines',
      coveredReceipts: 'Receipts',
      coveredPatients: 'Patients',
      statementBilled: 'Total billed',
      statementDue: 'Insurer share due',
      statementPatientShare: 'Patient share collected',
      statementPaid: 'Insurer payments received',
      statementBalance: 'Balance due',
      statementStatus: 'Statement status',
      statusSelect: 'Status update',
      statusUpdateAction: 'Update status',
      statementDate: 'Date',
      statementReceipt: 'Receipt',
      statementPatient: 'Patient',
      statementService: 'Services / Act / Medication',
      statementCode: 'Code',
      statementInam: 'INAM code',
      statementQty: 'Qty',
      statementBase: 'Reimbursement base',
      statementRate: 'Rate',
      statementTotal: 'Total billed',
      statementInsuranceShare: 'Insurer share',
      statementPatientShareColumn: 'Patient share',
      statementPrescriber: 'Prescriber',
      bordereauTitle: 'Insurance claim bordereau',
      bordereauLabel: 'Summary item',
      bordereauValue: 'Value',
      bordereauReady: 'Print window opened for the bordereau.',
      bordereauPopupBlocked: 'The bordereau print window was blocked by the browser.',
      attachmentsTitle: 'Attached documents checklist',
      attachmentDocument: 'Document',
      attachmentIncluded: 'Included',
      attachmentStatement: 'Detailed claims statement',
      attachmentBordereau: 'Claim bordereau',
      attachmentExcel: 'Excel summary file',
      attachmentLetter: 'Transmittal letter',
      signaturePreparedBy: 'Prepared by',
      signatureValidatedBy: 'Validated by',
      printGeneratedAt: 'Generated on',
      recordPaymentTitle: 'Record insurer payment',
      recordPaymentSubtitle: 'Register each insurer settlement to update balances, accounting, and receivables tracking automatically.',
      paymentAmount: 'Payment amount',
      paymentDate: 'Payment date',
      paymentMethod: 'Payment method',
      paymentReference: 'Reference',
      paymentNote: 'Payment note',
      paymentRecordAction: 'Record payment',
      paymentMethodMobileMoney: 'Mobile money',
      paymentMethodCheque: 'Cheque',
      paymentMethodOther: 'Other',
      paymentHistoryTitle: 'Payment history',
      paymentHistoryDate: 'Date',
      paymentHistoryMethod: 'Method',
      paymentHistoryReference: 'Reference',
      paymentHistoryAmount: 'Amount',
      paymentHistoryNote: 'Note',
      paymentHistoryRecordedBy: 'Recorded by',
      receivablesTitle: 'Insurance receivables follow-up',
      receivablesSubtitle: 'Use this accounting view to monitor insurer balances, aging, and follow-up reminders.',
      receivablesOpen: 'Open statements',
      receivablesOutstanding: 'Outstanding balance',
      receivablesOverdue: 'Overdue statements',
      receivablesReminders: 'Reminders sent',
      receivablesLastSent: 'Last sent',
      receivablesLastReminder: 'Last reminder',
      receivablesAging: 'Days outstanding',
      sendReminder: 'Send reminder',
      reminderSubject: 'Insurance payment reminder',
      reminderIntro: 'This is a reminder regarding the insurer balance that remains due for services delivered by',
      reminderLastTransmission: 'Last transmission',
      reminderAttachmentNote: 'Please attach the updated statement, the bordereau, and the transmittal letter before sending this reminder.',
      reminderDraftReady: 'Reminder email draft opened and the follow-up log was updated.',
      reminderEmailMissing: 'This insurer does not have an email address configured for reminders.',
      insuranceHistoryTitle: 'Insurance statement history',
      historyInsurer: 'Insurer',
      historyPeriod: 'Period',
      historyClaims: 'Claim lines',
      historyAmount: 'Amount due',
      historyPaid: 'Paid',
      historyBalance: 'Balance',
      historyStatus: 'Status',
      historyUpdated: 'Updated',
      historyActions: 'Actions',
      openStatement: 'Open',
      noClaims: 'No insurer claim lines found for the selected period.',
      statementRequired: 'Select an insurer and a valid period first.',
      statementGenerated: 'Insurance statement generated.',
      noStatementSelected: 'Generate or load an insurance statement first.',
      insurerEmailMissing: 'This insurer does not have an email address configured yet.',
      emailDraftReady: 'Email draft opened. Attach the detailed PDF, the bordereau, the Excel report, and the transmittal letter before sending.',
      excelDownloaded: 'Insurance statement Excel file downloaded.',
      letterDownloaded: 'Transmittal letter downloaded.',
      pdfReady: 'Print window opened for the detailed PDF statement.',
      pdfPopupBlocked: 'The PDF preview window was blocked by the browser.',
      statusUpdated: 'Insurance statement status updated.',
      paymentRecorded: 'Insurer payment recorded successfully.',
      paymentAmountInvalid: 'Enter a valid insurer payment amount.',
      paymentExceedsBalance: 'The insurer payment exceeds the remaining balance due.',
      paymentDateRequired: 'Select the insurer payment date.',
      statementLoaded: 'Insurance statement loaded.',
      statusGenerated: 'Generated',
      statusSent: 'Sent',
      statusPartiallyPaid: 'Partially paid',
      statusPaid: 'Paid',
      statusRejected: 'Rejected',
      statusDisputed: 'Disputed',
      transmittalTitle: 'Transmittal letter for insurer claims',
      transmittalIntro: 'Please find enclosed the detailed claims statement for the insured services delivered to your beneficiaries during the period below.',
      transmittalBody: 'We kindly request settlement of the insurer share due according to the applicable reimbursement agreement.',
      emailSubject: 'Insurance claims statement',
      emailGreeting: 'Hello,',
      emailIntro: 'Please find attached the detailed claims statement for insured services delivered by',
      emailInsurer: 'Insurer',
      emailPeriod: 'Period',
      emailClaims: 'Claim lines',
      emailAmountDue: 'Amount due',
      emailAttachmentNote: 'Please attach the detailed PDF statement, the bordereau, the Excel export, and the transmittal letter generated from MediTrack before sending this email.',
      emailClosing: 'Regards,',
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
      subtitle: 'Créer les services, tarifs assureurs et références de facturation par catégorie.',
      name: 'Services / Acte / Médicament',
      category: 'Catégorie',
      code: 'Code du service',
      inamCode: 'Code INAM',
      uninsuredPrice: 'Prix non assuré (CFL)',
      insuranceTitle: 'Tarifs spécifiques par assureur',
      insuranceHelp:
        'Chaque assureur partenaire apparaît automatiquement. Renseignez le prix clinique et la base de remboursement pour chacun.',
      insurancePrice: 'Prix assuré (CFL)',
      insuranceBase: 'Base de remboursement',
      insuranceEmpty: "Aucun tarif assureur pour le moment.",
      insuranceRequired: 'Renseignez le code du service, le code INAM et le prix non assuré.',
      save: 'Enregistrer le service',
      saved: 'Service enregistré.',
      cancelEdit: "Annuler la modification",
      edit: 'Modifier',
      editLoaded: 'Service chargé pour modification.',
      required: 'Veuillez renseigner le nom du service, la catégorie, le code, le code INAM et le prix non assuré.',
      empty: 'Aucun service pour le moment. Ajoutez-en un.',
      delete: 'Supprimer',
      listCategory: 'Catégorie',
      listService: 'Services / Acte / Médicament',
      listCode: 'Code',
      listInam: 'Code INAM',
      listUninsured: 'Prix non assuré',
      listInsuredPrice: 'Prix assuré',
      listBase: 'Base de remboursement',
      listPartner: 'Assureur',
      actions: 'Actions',
      insuranceListPartner: 'Assureur',
      insuranceListPrice: 'Prix assuré',
      insuranceListBase: 'Base de remboursement',
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
      overviewTitle: 'Vue opérationnelle',
      overviewSubtitle: 'Indicateurs du jour et du mois, répartition de l’activité et tendances.',
      trendMetric: 'Indicateur de tendance',
      metricPatients: 'Patients',
      metricRevenue: 'Recettes',
      metricServices: 'Actes facturés',
      metricHospitalizations: 'Hospitalisations',
      metricLabImaging: 'Laboratoire / imagerie',
      metricPrescriptions: 'Prescriptions',
      metricStock: 'Consommation de stock',
      daySummary: 'Aujourd’hui',
      monthSummary: 'Ce mois',
      activityByCategory: 'Activités par catégorie',
      activityByService: 'Activités par service',
      tableCategory: 'Catégorie',
      tableToday: 'Aujourd’hui',
      tableMonth: 'Ce mois',
      tableAmount: 'Montant',
      tableService: 'Services / Acte / Médicament',
      monthlyTrend: 'Tendance mensuelle (année en cours)',
      yearlyTrend: 'Comparaison pluriannuelle',
      adminSectionTitle: 'Vue administrateur',
      directorTitle: 'Vue direction générale',
      staffConfigured: 'Personnel configuré',
      servicesConfigured: 'Services configurés',
      insurersConfigured: 'Assureurs partenaires',
      admissionsTodayCard: 'Admissions du jour',
      staffMix: 'Répartition du personnel',
      hrTitle: 'Vue RH',
      hrTotalStaff: 'Effectif total',
      hrPermanent: 'Personnel permanent',
      hrLocum: 'Personnel vacataire',
      hrPayrollEstimate: 'Paie estimée à verser',
      metricPatientsRegistered: 'Patients enregistrés',
      metricConsultationsCompleted: 'Consultations réalisées',
      metricBilledServices: 'Actes facturés',
      metricTotalBilled: 'Montant total facturé',
      metricCollected: 'Montant encaissé',
      metricInsurancePart: 'Part assurance',
      metricPatientPart: 'Part patient',
      metricAdmissions: 'Admissions',
      metricStockConsumption: 'Consommation de stock',
      roleLabel: 'Rôle : {role}',
      role: 'Rôle',
      count: 'Effectif',
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
      selectEncounter: 'Parcours patient',
      selectEncounterRequired: 'Sélectionnez d’abord un parcours patient.',
      prescriptionType: 'Type de prescription',
      prescriptionOutpatientCare: 'Soins ambulatoires',
      prescriptionDay: 'Hospitalisation de jour',
      prescriptionFull: 'Hospitalisation complète',
      prescriptionOutpatientRx: 'Ordonnance ambulatoire',
      complaint: 'Motif de consultation / plainte',
      symptoms: 'Signes fonctionnels / symptômes',
      examSummary: 'Résumé de l’examen clinique',
      diagnosis1: 'Hypothèse diagnostique 1',
      diagnosis2: 'Hypothèse diagnostique 2',
      diagnosis3: 'Hypothèse diagnostique 3',
      requiredTests: 'Examens / investigations demandés',
      stockMedication: 'Médicament / consommable',
      stockQty: 'Quantité',
      addMedication: 'Ajouter le médicament',
      saveConsultation: 'Enregistrer la consultation',
      medicationRequired: 'Sélectionnez un article de stock et une quantité.',
      doctorSaved: 'Consultation enregistrée.',
      nurseTitle: "Vue d'ensemble soins infirmiers",
      nursePatients: 'Patients assignés',
      nurseTasks: 'Tâches réalisées aujourd’hui',
      nurseMonthly: 'Activité mensuelle',
      hospitalizationMode: 'Mode de prise en charge',
      modeOutpatient: 'Ambulatoire',
      modeDay: 'Hospitalisation de jour',
      modeFull: 'Hospitalisation complète',
      temp: 'Température',
      bpRight: 'TA bras droit',
      bpLeft: 'TA bras gauche',
      weight: 'Poids',
      height: 'Taille',
      waist: 'Tour de taille',
      pulse: 'Pouls',
      roomNumber: 'Numéro de chambre',
      bedNumber: 'Numéro de lit',
      nursingCare: 'Soins réalisés',
      nurseStock: 'Médicament / consommable utilisé',
      nurseStockQty: 'Quantité',
      addSupply: 'Ajouter le consommable',
      saveVitals: 'Enregistrer les constantes et soins',
      nurseSaved: 'Constantes et soins enregistrés.',
      labTitle: 'Vue d’ensemble laboratoire',
      labPending: 'Tests en attente',
      labInProgress: 'En cours',
      labCompleted: 'Terminés',
      radiologyTitle: "Vue d'ensemble imagerie",
      radioScheduled: 'Examens programmés',
      radioCompleted: 'Examens réalisés',
      pharmacyTitle: "Vue d'ensemble pharmacie",
      pharmacyPending: 'Prescriptions en attente',
      pharmacyDispensed: 'Médicaments délivrés',
      pharmacyAlerts: 'Alertes de stock',
      pharmacyQueueTitle: 'File de dispensation',
      pharmacyQueuePrescription: 'Prescription',
      pharmacyQueuePending: 'À délivrer',
      pharmacyQueueDispensed: 'Délivrée',
      pharmacyDispenseAction: 'Marquer délivrée',
      action: 'Action',
      accountTitle: "Vue d'ensemble finances",
      revenue: 'Revenus totaux',
      patientShare: 'Paiements patients',
      insuranceShare: "Paiements assurance",
      outstanding: 'Soldes impayés',
      cashPayments: 'Paiements en espèces',
      bankPayments: 'Paiements par virement',
      adminTitle: "Vue d'ensemble direction",
      totalServices: 'Utilisation des services',
      staffProductivity: 'Productivité du personnel',
      doctorPayments: 'Paiements médecins (vacataires)',
      amount: 'Montant',
      patient: 'Patient',
      doctorExamResults: 'Résultats récents des examens',
      noData: 'Aucune donnée.',
      unknownStaff: 'Agent inconnu',
      otherTitle: 'Vue générale',
      otherSubtitle: 'Votre tableau de bord s’affichera une fois le rôle configuré.',
    },

    labModule: {
      title: 'Module laboratoire',
      subtitle: 'Consultez les analyses prescrites, vérifiez l’éligibilité au traitement, saisissez les résultats et validez-les.',
      kpiRequested: 'Analyses prescrites',
      kpiEligible: 'Payées / éligibles',
      kpiValidated: 'Résultats validés',
      filtersTitle: 'Filtres des demandes',
      search: 'Recherche',
      searchPlaceholder: 'Rechercher par patient, service ou prescripteur',
      statusFilter: 'Filtre de file',
      filterAll: 'Toutes les demandes',
      filterEligible: 'Payées / éligibles uniquement',
      requestSummaryTitle: 'Demande sélectionnée',
      queueTitle: 'Analyses prescrites',
      queuePatient: 'Patient',
      queueAction: 'Action',
      openRequest: 'Ouvrir',
      openPatientRecord: 'Ouvrir le dossier patient',
      resultEntryTitle: 'Saisie et validation des résultats',
      stockUsageTitle: 'Consommation de stock',
      stockItem: 'Réactif / consommable',
      stockQty: 'Quantité',
      addSupply: 'Ajouter la consommation',
      stockUsageRequired: 'Sélectionnez un réactif / consommable et une quantité valide.',
      validateResult: 'Valider le résultat',
      historyTitle: 'Historique des résultats',
      noQueue: 'Aucune demande de laboratoire ne correspond aux filtres actuels.',
      noRequestSelected: 'Aucune demande sélectionnée',
      lockedRequest: 'Seules les demandes payées ou déjà validées peuvent être traitées.',
      readOnly: 'Ce profil dispose d’un accès en lecture seule à la file du laboratoire.',
      resultRequired: 'Saisissez un résultat avant de valider la demande.',
      resultValidated: 'Résultat validé et transmis au dossier patient.',
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
      firstName: 'Prénom',
      lastName: 'Nom',
      dob: 'Date de naissance',
      sex: 'Sexe',
      contractStart: 'Date de début du contrat',
      fullName: 'Nom complet',
      role: 'Rôle',
      roleAdmission: "Admission / Secrétariat médical",
      roleAdmin: 'Administrateur',
      roleDirector: 'Directeur',
      roleAccountant: 'Comptable',
      roleDoctor: 'Médecin',
      roleLab: 'Laborantin',
      roleNurse: 'Infirmier(ère)',
      roleRadiology: 'Imagerie médicale',
      rolePharmacy: 'Pharmacie',
      roleHr: 'Ressources humaines',
      roleOther: 'Autre',
      employmentType: "Type d'emploi",
      employmentPermanent: 'Permanent',
      employmentLocum: 'Vacataire',
      locumRate: 'Taux vacataire (%)',
      position: 'Poste / fonction',
      staffStatus: 'Statut du personnel',
      statusActive: 'Actif',
      statusOnLeave: 'En congé',
      statusSuspended: 'Suspendu',
      statusInactive: 'Inactif',
      payMode: 'Mode de rémunération',
      paySalary: 'Salaire contractuel',
      payPercentage: 'Pourcentage sur prestations',
      contractSalary: 'Salaire contractuel (CFL)',
      employeeSocialRate: 'Part sociale employé (%)',
      employerSocialRate: 'Part sociale entreprise (%)',
      otherDeductions: 'Autres retenues (CFL)',
      socialId: 'Référence sociale / administrative',
      notes: 'Notes administratives',
      email: 'Email',
      countryCode: 'Indicatif pays',
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
      listPosition: 'Poste',
      listContract: 'Contrat',
      listPayMode: 'Rémunération',
      listStatus: 'Statut',
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
        salaryRequired: 'Veuillez saisir le salaire contractuel du personnel permanent.',
      },
    },
    hrPayroll: {
      title: 'RH & paie',
      subtitle: 'Consultez les fiches agents, calculez la paie par période, enregistrez les paiements et générez les états de paie.',
      period: 'Période de paie',
      filter: 'Filtre',
      filterAll: 'Tous les agents',
      filterPermanent: 'Personnel permanent',
      filterLocum: 'Personnel vacataire',
      filterOutstanding: 'Soldes à payer',
      filterPaid: 'Entièrement payés',
      totalEmployees: 'Agents sur la période',
      totalDue: 'Net de paie dû',
      totalPaid: 'Payé sur la période',
      totalOutstanding: 'Solde restant',
      tableTitle: 'Tableau de paie',
      gross: 'Brut',
      employeeSocial: 'Part sociale employé',
      employerSocial: 'Part sociale entreprise',
      netDue: 'Net à payer',
      paid: 'Payé',
      balance: 'Solde',
      action: 'Action',
      employeeSummary: 'Résumé agent',
      noEmployeeSelected: 'Sélectionnez un agent pour afficher le détail de paie.',
      calculationBasis: 'Éléments de calcul',
      basisAssignedServices: 'Prestations attribuées',
      basisConsultations: 'Consultations',
      basisLab: 'Analyses de laboratoire',
      basisImaging: 'Examens d’imagerie',
      basisRevenue: 'Base de recettes',
      taxWithholding: 'Retenue fiscale',
      paymentMethod: 'Mode de paiement',
      paymentAmount: 'Montant',
      paymentNote: 'Note',
      recordPayment: 'Enregistrer un paiement',
      recordPaymentBtn: 'Sauvegarder le paiement',
      downloadStatement: 'Télécharger l’état de paie',
      historyTitle: 'Historique des paiements',
      openEmployee: 'Ouvrir',
      invalidPaymentAmount: 'Saisissez un montant valide, sans dépasser le solde restant.',
      paymentSaved: 'Paiement de paie enregistré.',
    },
    billing: {
      title: 'Facturation & Admission du patient',
      subtitle: "Enregistrez les patients, validez l'assurance et générez la facturation.",
      lookupTitle: 'Recherche patient',
      admissionTitle: 'Admission du patient',
      newPatient: 'Nouveau patient',
      returningPatient: 'Ancien patient',
      patientSearch: 'Rechercher un patient',
      patientSearchPlaceholder: 'Rechercher par nom ou téléphone',
      createPatient: 'Créer un nouveau profil patient',
      patientNotFound: 'Aucun patient trouvé. Créez un nouveau profil pour continuer.',
      firstName: 'Prénom',
      lastName: 'Nom',
      fullName: 'Nom complet',
      sex: 'Sexe',
      sexFemale: 'Femme',
      sexMale: 'Homme',
      sexOther: 'Autre',
      dob: 'Date de naissance',
      age: 'Âge',
      addressCountry: 'Pays',
      addressCity: 'Ville',
      addressDistrict: 'Quartier / district',
      addressPostal: 'Code postal',
      countryCode: 'Indicatif pays',
      address: 'Adresse',
      phone: 'Téléphone',
      emergencyPhone: "Contact d'urgence",
      whatsapp: 'WhatsApp (si différent)',
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
      insuranceTitle: 'Assurance & paramétrage de la visite',
      insuranceStatus: "Statut d'assurance",
      insuranceYes: 'Oui',
      insuranceNo: 'Non',
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
      cardExpiry: "Date d'expiration de la carte",
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
      assignDoctor: 'Prestataire de soins assigné',
      doctorPlaceholder: 'Sélectionner un médecin',
      noDoctor: 'Aucun médecin disponible',
      paymentMethod: 'Mode de paiement',
      paymentCash: 'Espèces',
      paymentBank: 'Virement bancaire',
      patientStatus: "Statut d'admission",
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
      insuranceRequired:
        "Veuillez compléter toutes les informations d'assurance, y compris la date d'expiration.",
      providerRequired: 'Veuillez sélectionner le prestataire de soins avant de sauvegarder.',
      savePatientFirst: "Enregistrez d'abord le profil patient avant d'ajouter les services.",
      labList: 'Analyses biologiques',
      imagingList: "Services d'imagerie",
      billingTitle: 'Actes facturés',
      item: 'Services / Acte / Médicament',
      insurerColumn: 'Assurance',
      calculatedShare: 'Part calculée',
      servicePlaceholder: 'Sélectionner un service',
      categoryPlaceholder: 'Sélectionner une catégorie',
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
      removeLine: 'Retirer la dernière ligne',
      summaryTitle: 'Résumé de facturation',
      totalCfl: 'Total (CFL)',
      insuranceShare: 'Part assurance',
      patientShare: 'Part patient',
      notes: 'Notes de facturation',
      remove: 'Retirer',
    },
    services: {
      title: 'Proposer des services',
      subtitle: 'Sélectionnez les services à ajouter à la facturation.',
      back: "Retour à l'admission",
      selectHint: 'Sélectionnez un ou plusieurs services.',
      catalogTitle: 'Sélectionner les services du catalogue',
      allCategories: 'Toutes les catégories',
      categoryFilter: 'Catégorie de service',
      search: 'Rechercher un service',
      searchPlaceholder: 'Rechercher par nom ou code',
      tableSelect: 'Choisir',
      tableCategory: 'Catégorie',
      tableService: 'Services / Acte / Médicament',
      tableCode: 'Code',
      tableInam: 'Code INAM',
      tableUninsured: 'Prix non assuré',
      tableInsured: 'Prix assuré',
      tableBase: 'Base de remboursement',
      tableQty: 'Qté',
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
      statusArrived: 'Arrivé',
      statusInCare: 'En soins',
      statusCompleted: 'Réalisé',
      statusCancelled: 'Annulé',
      openAdmission: "Ouvrir l'admission",
      admissionLoaded: "Le rendez-vous a été chargé dans l'admission.",
      portalTitle: 'Prise de rendez-vous en ligne',
      portalDesc: 'Partagez un lien de réservation avec les patients.',
      portalLink: 'Lien de réservation',
      copyLink: 'Copier le lien',
      required: 'Veuillez renseigner le patient, le médecin, la date et l’heure.',
      saved: 'Rendez-vous enregistré.',
      copied: 'Lien de réservation copié.',
    },
    inventory: {
      title: 'Achats, stock et commandes',
      subtitle: 'Suivez les produits, mouvements de stock, bons de commande, réceptions et alertes de stock.',
      kpiProducts: 'Produits en stock',
      kpiLow: 'Alertes de stock faible',
      kpiExpiring: 'Péremptions proches',
      kpiOrders: 'Commandes ouvertes',
      addTitle: 'Enregistrer un produit',
      name: 'Produit / désignation',
      type: 'Type de produit',
      typeMedication: 'Médicament',
      typeConsumable: 'Consommable',
      typeReagent: 'Réactif',
      typeEquipment: 'Matériel',
      typeOther: 'Autre',
      supplier: 'Fournisseur',
      unitPrice: 'Coût unitaire (CFL)',
      unitCost: 'Coût d’achat unitaire (CFL)',
      totalCost: 'Coût total',
      quantity: 'Quantité',
      minLevel: 'Seuil minimum',
      entryDate: "Date d'entrée",
      expiryDate: 'Date de péremption',
      receipt: 'Reçu fournisseur',
      notes: 'Notes',
      add: 'Enregistrer le produit',
      listTitle: 'Liste de stock',
      purchaseTitle: 'Achats et commandes',
      orderItem: 'Produit / désignation',
      orderQty: 'Quantité commandée',
      orderDate: 'Date prévue',
      createOrder: 'Créer la commande',
      receivedQty: 'Quantité reçue',
      receivedDate: 'Date de réception',
      receiveAction: 'Réceptionner',
      movementTitle: 'Mouvements de stock',
      movementDate: 'Date',
      movementItem: 'Produit',
      movementDirection: 'Sens',
      movementQty: 'Qté',
      movementSource: 'Source',
      movementCost: 'Coût',
      movementRecordedBy: 'Enregistré par',
      directionIn: 'Entrée',
      directionOut: 'Sortie',
      movementPurchase: 'Achat / réception',
      movementConsumption: 'Consommation',
      movementAdjustment: 'Ajustement',
      movementManual: 'Entrée manuelle',
      sourceInventory: 'Inventaire',
      sourcePurchase: 'Bon de commande',
      sourceBilling: 'Facturation / pharmacie',
      sourceDoctor: 'Médecin',
      sourceNurse: 'Infirmerie / hospitalisation',
      sourceLab: 'Laboratoire',
      sourceRadiology: 'Imagerie',
      sourcePharmacy: 'Pharmacie',
      sourceHospitalization: 'Hospitalisation',
      status: 'Statut',
      statusOk: 'OK',
      statusLow: 'Faible',
      statusExpiring: 'Péremption proche',
      statusExpired: 'Expiré',
      statusOpen: 'Ouvert',
      statusPartial: 'Partiellement reçu',
      statusReceived: 'Reçu',
      statusCancelled: 'Annulé',
      update: 'Mettre à jour',
      remove: 'Retirer',
      required: 'Veuillez saisir la désignation du produit.',
      saved: 'Produit enregistré dans le stock.',
      poRequired: 'Veuillez renseigner le fournisseur, le produit et la quantité.',
      poSaved: 'Commande créée.',
      receiveRequired: 'Veuillez saisir une quantité reçue valide, sans dépasser le reliquat.',
      receiveSaved: 'Réception enregistrée et stock mis à jour.',
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
      insuranceClaimsTitle: 'États de créances par assureur',
      insuranceClaimsSubtitle: 'Générez les relevés par assurance, exportez les pièces justificatives, enregistrez les règlements et suivez les soldes restants.',
      insurerFilter: 'Assureur',
      periodStart: 'Début de période',
      periodEnd: 'Fin de période',
      generateStatement: 'Générer l’état',
      openEmailDraft: 'Ouvrir le brouillon email',
      exportBordereau: 'Exporter le bordereau',
      exportPdf: 'Exporter en PDF',
      exportExcel: 'Exporter en Excel',
      downloadLetter: 'Télécharger la lettre de transmission',
      claimLines: 'Lignes de créance',
      coveredReceipts: 'Reçus',
      coveredPatients: 'Patients',
      statementBilled: 'Total facturé',
      statementDue: 'Part assureur à recouvrer',
      statementPatientShare: 'Part patient encaissée',
      statementPaid: 'Règlements assureur reçus',
      statementBalance: 'Solde restant dû',
      statementStatus: 'Statut du relevé',
      statusSelect: 'Mise à jour du statut',
      statusUpdateAction: 'Mettre à jour le statut',
      statementDate: 'Date',
      statementReceipt: 'Reçu',
      statementPatient: 'Patient',
      statementService: 'Services / Acte / Médicament',
      statementCode: 'Code',
      statementInam: 'Code INAM',
      statementQty: 'Qté',
      statementBase: 'Base de remboursement',
      statementRate: 'Taux',
      statementTotal: 'Total facturé',
      statementInsuranceShare: 'Part assureur',
      statementPatientShareColumn: 'Part patient',
      statementPrescriber: 'Prescripteur',
      bordereauTitle: 'Bordereau de créances assurance',
      bordereauLabel: 'Élément',
      bordereauValue: 'Valeur',
      bordereauReady: 'La fenêtre d’impression du bordereau a été ouverte.',
      bordereauPopupBlocked: 'La fenêtre de prévisualisation du bordereau a été bloquée par le navigateur.',
      attachmentsTitle: 'Checklist des pièces jointes',
      attachmentDocument: 'Document',
      attachmentIncluded: 'Joint',
      attachmentStatement: 'Relevé détaillé des créances',
      attachmentBordereau: 'Bordereau de créances',
      attachmentExcel: 'Fichier Excel récapitulatif',
      attachmentLetter: 'Lettre de transmission',
      signaturePreparedBy: 'Préparé par',
      signatureValidatedBy: 'Validé par',
      printGeneratedAt: 'Généré le',
      recordPaymentTitle: 'Enregistrer un paiement assureur',
      recordPaymentSubtitle: 'Chaque règlement enregistré met à jour automatiquement le solde, la comptabilité et le suivi des créances.',
      paymentAmount: 'Montant du paiement',
      paymentDate: 'Date du paiement',
      paymentMethod: 'Mode de paiement',
      paymentReference: 'Référence',
      paymentNote: 'Note',
      paymentRecordAction: 'Enregistrer le paiement',
      paymentMethodMobileMoney: 'Mobile money',
      paymentMethodCheque: 'Chèque',
      paymentMethodOther: 'Autre',
      paymentHistoryTitle: 'Historique des paiements',
      paymentHistoryDate: 'Date',
      paymentHistoryMethod: 'Mode',
      paymentHistoryReference: 'Référence',
      paymentHistoryAmount: 'Montant',
      paymentHistoryNote: 'Note',
      paymentHistoryRecordedBy: 'Enregistré par',
      receivablesTitle: 'Suivi comptable des créances assurance',
      receivablesSubtitle: 'Vue dédiée au suivi des soldes assurance, des relances et de l’ancienneté des créances.',
      receivablesOpen: 'États ouverts',
      receivablesOutstanding: 'Solde global restant dû',
      receivablesOverdue: 'États en retard',
      receivablesReminders: 'Relances envoyées',
      receivablesLastSent: 'Dernier envoi',
      receivablesLastReminder: 'Dernière relance',
      receivablesAging: 'Jours d’ancienneté',
      sendReminder: 'Envoyer une relance',
      reminderSubject: 'Relance de paiement assurance',
      reminderIntro: 'Ceci est une relance concernant le solde assureur restant dû pour les prestations réalisées par',
      reminderLastTransmission: 'Dernière transmission',
      reminderAttachmentNote: 'Veuillez joindre à cette relance le relevé actualisé, le bordereau et la lettre de transmission.',
      reminderDraftReady: 'Le brouillon de relance a été ouvert et le suivi a été mis à jour.',
      reminderEmailMissing: 'Aucune adresse email n’est configurée pour les relances de cet assureur.',
      insuranceHistoryTitle: 'Historique des états assureur',
      historyInsurer: 'Assureur',
      historyPeriod: 'Période',
      historyClaims: 'Lignes',
      historyAmount: 'Montant dû',
      historyPaid: 'Payé',
      historyBalance: 'Solde',
      historyStatus: 'Statut',
      historyUpdated: 'Mise à jour',
      historyActions: 'Actions',
      openStatement: 'Ouvrir',
      noClaims: 'Aucune ligne de créance assurance sur la période sélectionnée.',
      statementRequired: 'Sélectionnez d’abord un assureur et une période valide.',
      statementGenerated: 'État assureur généré.',
      noStatementSelected: 'Générez ou chargez d’abord un état assureur.',
      insurerEmailMissing: 'Aucune adresse email n’est configurée pour cet assureur.',
      emailDraftReady: 'Le brouillon email a été ouvert. Joignez le PDF détaillé, le bordereau, le fichier Excel et la lettre de transmission avant envoi.',
      excelDownloaded: 'Le fichier Excel de l’état assureur a été téléchargé.',
      letterDownloaded: 'La lettre de transmission a été téléchargée.',
      pdfReady: 'La fenêtre d’impression du PDF détaillé a été ouverte.',
      pdfPopupBlocked: 'La fenêtre de prévisualisation PDF a été bloquée par le navigateur.',
      statusUpdated: 'Le statut de l’état assureur a été mis à jour.',
      paymentRecorded: 'Le paiement assureur a été enregistré.',
      paymentAmountInvalid: 'Saisissez un montant de paiement assureur valide.',
      paymentExceedsBalance: 'Le paiement dépasse le solde restant dû.',
      paymentDateRequired: 'Sélectionnez la date du paiement assureur.',
      statementLoaded: 'État assureur chargé.',
      statusGenerated: 'Généré',
      statusSent: 'Transmis',
      statusPartiallyPaid: 'Partiellement payé',
      statusPaid: 'Payé',
      statusRejected: 'Rejeté',
      statusDisputed: 'En litige',
      transmittalTitle: 'Lettre de transmission des créances assurance',
      transmittalIntro: 'Veuillez trouver ci-joint le relevé détaillé des prestations assurées réalisées au bénéfice de vos assurés sur la période ci-dessous.',
      transmittalBody: 'Nous vous remercions de bien vouloir procéder au règlement de la part assureur due conformément à la convention de remboursement applicable.',
      emailSubject: 'État de créances assurance',
      emailGreeting: 'Bonjour,',
      emailIntro: 'Veuillez trouver ci-joint le relevé détaillé des prestations assurées réalisées par',
      emailInsurer: 'Assureur',
      emailPeriod: 'Période',
      emailClaims: 'Lignes de créance',
      emailAmountDue: 'Montant dû',
      emailAttachmentNote: 'Veuillez joindre à cet email le relevé PDF détaillé, le bordereau, l’export Excel et la lettre de transmission générés depuis MediTrack avant de l’envoyer.',
      emailClosing: 'Cordialement,',
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
  populateInsuranceProviderOptions();
  populateServiceCategoryOptions();
  if (patientStatusLabel) {
    patientStatusLabel.value = activePatientId ? t('billing.returningPatient') : t('billing.newPatient');
  }
  applyRoleAccess();
  populateDoctorSelect();
  populateAppointmentDoctors();
  renderServiceSelectionOptions();
  renderAppointmentsTable();
  renderInventoryModule();
  renderReports();
  refreshDashboardIfVisible();
  refreshLabModuleIfVisible();
  refreshHrPayrollIfVisible();
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
  clinicalRecordsView?.classList.add('hidden');
  labModuleView?.classList.add('hidden');
  hrPayrollView?.classList.add('hidden');
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
    populateInsuranceProviderOptions();
    toggleInsuranceDetails();
    return;
  }
  if (view === 'services') {
    serviceSelectionView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    renderServiceSelectionOptions();
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
    renderInventoryModule();
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
    pendingServiceInsurance = editingServiceId
      ? pendingServiceInsurance
      : buildInsurancePricingDraft();
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
  if (view === 'records') {
    clinicalRecordsView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    renderClinicalRecord();
    return;
  }
  if (view === 'lab') {
    labModuleView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    renderLabModule();
    return;
  }
  if (view === 'hr') {
    hrPayrollView?.classList.remove('hidden');
    topBar.classList.remove('hidden');
    renderHrPayrollModule();
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
    activeAppointmentId = '';
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
    const code = serviceCatalogCode?.value?.trim() || '';
    const inamCode = serviceCatalogInamCode?.value?.trim() || '';
    const uninsuredPrice = Number.parseFloat(serviceCatalogUninsuredPrice?.value || '');
    if (!name || !category || !code || !inamCode || !Number.isFinite(uninsuredPrice)) {
      setMessage(serviceCatalogMessage, t('serviceCatalog.required'));
      return;
    }
    const list = loadServiceCatalog();
    const insurancePricing = pendingServiceInsurance
      .filter((entry) => entry.price !== '' || entry.base !== '')
      .map((entry) => ({
        partner: entry.partner,
        price: parseNumber(entry.price),
        base: parseNumber(entry.base),
      }));
    const payload = {
      id: editingServiceId || `svc_${Date.now()}`,
      name,
      category,
      code,
      inamCode,
      uninsuredPrice,
      insurancePricing,
    };
    const index = list.findIndex((item) => item.id === payload.id);
    if (index >= 0) {
      list[index] = payload;
    } else {
      list.push(payload);
    }
    saveServiceCatalog(list);
    serviceCatalogForm.reset();
    editingServiceId = null;
    pendingServiceInsurance = buildInsurancePricingDraft();
    renderServiceInsuranceTable();
    if (cancelServiceEdit) cancelServiceEdit.classList.add('hidden');
    setMessage(serviceCatalogMessage, t('serviceCatalog.saved'));
    renderServiceCatalog();
    renderServiceSelectionTable();
  });
}

if (serviceCatalogTable) {
  serviceCatalogTable.addEventListener('click', (event) => {
    const editButton = event.target.closest('button[data-service-edit]');
    if (editButton) {
      const id = editButton.getAttribute('data-service-edit');
      const service = loadServiceCatalog().find((item) => item.id === id);
      if (!service) return;
      editingServiceId = service.id;
      if (serviceCatalogName) serviceCatalogName.value = service.name || '';
      if (serviceCatalogCategory) serviceCatalogCategory.value = service.category || '';
      if (serviceCatalogCode) serviceCatalogCode.value = service.code || service.diseaseCode || '';
      if (serviceCatalogInamCode) serviceCatalogInamCode.value = service.inamCode || '';
      if (serviceCatalogUninsuredPrice) {
        serviceCatalogUninsuredPrice.value = service.uninsuredPrice || '';
      }
      pendingServiceInsurance = buildInsurancePricingDraft(service.insurancePricing || []);
      renderServiceInsuranceTable();
      if (cancelServiceEdit) cancelServiceEdit.classList.remove('hidden');
      setMessage(serviceCatalogMessage, t('serviceCatalog.editLoaded'));
      return;
    }
    const deleteButton = event.target.closest('button[data-service-id]');
    if (!deleteButton) return;
    const id = deleteButton.getAttribute('data-service-id');
    if (!id) return;
    const list = loadServiceCatalog().filter((item) => item.id !== id);
    saveServiceCatalog(list);
    if (editingServiceId === id) {
      editingServiceId = null;
      serviceCatalogForm.reset();
      pendingServiceInsurance = buildInsurancePricingDraft();
      renderServiceInsuranceTable();
      if (cancelServiceEdit) cancelServiceEdit.classList.add('hidden');
    }
    renderServiceCatalog();
    renderServiceSelectionTable();
  });
}

if (serviceInsuranceTable) {
  serviceInsuranceTable.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const partner = target.dataset.partner;
    if (!partner) return;
    const entry = pendingServiceInsurance.find((item) => item.partner === partner);
    if (!entry) return;
    if (target.classList.contains('service-insurance-price')) {
      entry.price = target.value;
    }
    if (target.classList.contains('service-insurance-base')) {
      entry.base = target.value;
    }
  });
}

if (cancelServiceEdit) {
  cancelServiceEdit.addEventListener('click', () => {
    editingServiceId = null;
    serviceCatalogForm?.reset();
    pendingServiceInsurance = buildInsurancePricingDraft();
    renderServiceInsuranceTable();
    cancelServiceEdit.classList.add('hidden');
    setMessage(serviceCatalogMessage, '');
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
    pendingServiceInsurance = buildInsurancePricingDraft(pendingServiceInsurance);
    renderServiceInsuranceTable();
    populateInsuranceProviderOptions();
    renderServiceSelectionTable();
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
    pendingServiceInsurance = buildInsurancePricingDraft(pendingServiceInsurance);
    renderServiceInsuranceTable();
    populateInsuranceProviderOptions();
    renderServiceSelectionTable();
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

function getPayrollPaymentsKey() {
  if (currentFacility) {
    return `meditrack_payroll_payments_${currentFacility}`;
  }
  return 'meditrack_payroll_payments_default';
}

function loadPayrollPayments() {
  try {
    const raw = localStorage.getItem(getPayrollPaymentsKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function savePayrollPayments(list) {
  try {
    localStorage.setItem(getPayrollPaymentsKey(), JSON.stringify(list));
  } catch (error) {
    // ignore
  }
}

function getEmployeeIdentity(employee) {
  return employee?.id || employee?.code || employee?.email || employee?.name || '';
}

function getEmployeeRoleLabel(employee) {
  const mapping = {
    admission: 'staff.roleAdmission',
    admin: 'staff.roleAdmin',
    director: 'staff.roleDirector',
    accountant: 'staff.roleAccountant',
    doctor: 'staff.roleDoctor',
    nurse: 'staff.roleNurse',
    lab: 'staff.roleLab',
    radiology: 'staff.roleRadiology',
    pharmacy: 'staff.rolePharmacy',
    hr: 'staff.roleHr',
    other: 'staff.roleOther',
  };
  const key = mapping[employee?.role || ''];
  return key ? t(key) : employee?.roleLabel || employee?.role || '-';
}

function formatEmploymentTypeLabel(value) {
  return value === 'locum' ? t('staff.employmentLocum') : t('staff.employmentPermanent');
}

function formatPayModeLabel(value) {
  const labels = {
    contract_salary: t('staff.paySalary'),
    service_percentage: t('staff.payPercentage'),
  };
  return labels[value] || value || '-';
}

function formatStaffStatusLabel(value) {
  const labels = {
    active: t('staff.statusActive'),
    on_leave: t('staff.statusOnLeave'),
    suspended: t('staff.statusSuspended'),
    inactive: t('staff.statusInactive'),
  };
  return labels[value] || value || '-';
}

function getDefaultPayrollPeriod(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

function normalizePayrollPeriod(period) {
  return /^\d{4}-\d{2}$/.test(String(period || '')) ? period : getDefaultPayrollPeriod();
}

function isDateInPayrollPeriod(value, period) {
  const parsed = parseDateValue(value);
  if (!parsed) return false;
  const normalized = normalizePayrollPeriod(period);
  const [year, month] = normalized.split('-').map((part) => Number.parseInt(part, 10));
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 1);
  return parsed >= start && parsed < end;
}

function getEmployeeAssignedItems(employee, period) {
  const employeeId = getEmployeeIdentity(employee);
  const employeeName = employee?.name || '';
  return loadReceipts()
    .filter((receipt) => isDateInPayrollPeriod(receipt.createdAt, period))
    .flatMap((receipt) =>
      (receipt.items || [])
        .filter((item) => {
          return [item.providerId, receipt.doctor].includes(employeeId) || [item.providerName, receipt.doctorName].includes(employeeName);
        })
        .map((item) => ({
          ...item,
          receiptId: receipt.id,
          createdAt: item.createdAt || receipt.createdAt,
          patientId: receipt.patientId || item.patientId || '',
          patientName: receipt.patientName || '',
        }))
    );
}

function getEmployeeAssignedEncounters(employee, period) {
  const employeeId = getEmployeeIdentity(employee);
  const employeeName = employee?.name || '';
  return loadEncounters().filter((encounter) => {
    if (!isDateInPayrollPeriod(encounter.createdAt, period)) return false;
    return [encounter.doctor, encounter.providerId].includes(employeeId) || [encounter.doctorName, encounter.providerName].includes(employeeName);
  });
}

function calculateEmployeePayroll(employee, period = getDefaultPayrollPeriod()) {
  const normalizedPeriod = normalizePayrollPeriod(period);
  const assignedItems = getEmployeeAssignedItems(employee, normalizedPeriod);
  const assignedEncounters = getEmployeeAssignedEncounters(employee, normalizedPeriod);
  const serviceCount = assignedItems.length;
  const revenueBase = assignedItems.reduce((sum, item) => sum + parseNumber(item.total), 0);
  const consultations = assignedItems.filter((item) => getDashboardCategoryBucket(item.category) === 'consultation').length;
  const labExamCount = assignedItems.filter((item) => getDashboardCategoryBucket(item.category) === 'lab').length;
  const imagingCount = assignedItems.filter((item) => getDashboardCategoryBucket(item.category) === 'imaging').length;
  const payMode = employee?.payMode || (employee?.employmentType === 'locum' ? 'service_percentage' : 'contract_salary');
  const contractualSalary = parseNumber(employee?.contractualSalary || employee?.salary || employee?.monthlySalary);
  const employeeSocialRate = parseNumber(employee?.employeeSocialRate);
  const employerSocialRate = parseNumber(employee?.employerSocialRate);
  const otherDeductions = parseNumber(employee?.otherDeductions);
  const locumRate = parseNumber(employee?.locumRate || employee?.payRate);
  const otrRate = parseNumber(employee?.doctorProfile?.otrRate);
  let gross = 0;
  if (employee?.employmentType === 'locum' || payMode === 'service_percentage') {
    gross = revenueBase * ((locumRate || 0) / 100);
  } else {
    gross = contractualSalary;
  }
  const employeeSocial = employee?.employmentType === 'locum' ? 0 : gross * (employeeSocialRate / 100);
  const employerSocial = employee?.employmentType === 'locum' ? 0 : gross * (employerSocialRate / 100);
  const taxWithholding = employee?.employmentType === 'locum' ? gross * (otrRate / 100) : 0;
  const deductions = employeeSocial + otherDeductions + taxWithholding;
  const netDue = Math.max(0, gross - deductions);
  const payments = loadPayrollPayments().filter((entry) => entry.employeeId === getEmployeeIdentity(employee) && entry.period === normalizedPeriod);
  const paidAmount = payments.reduce((sum, entry) => sum + parseNumber(entry.amount), 0);
  const balance = Math.max(0, netDue - paidAmount);
  return {
    employeeId: getEmployeeIdentity(employee),
    period: normalizedPeriod,
    assignedItems,
    assignedEncounters,
    serviceCount,
    consultationCount: consultations,
    labExamCount,
    imagingCount,
    revenueBase,
    gross,
    employeeSocial,
    employerSocial,
    taxWithholding,
    otherDeductions,
    deductions,
    netDue,
    paidAmount,
    balance,
    payments,
    basis: [
      { label: t('hrPayroll.basisAssignedServices'), value: String(serviceCount) },
      { label: t('hrPayroll.basisConsultations'), value: String(consultations) },
      { label: t('hrPayroll.basisLab'), value: String(labExamCount) },
      { label: t('hrPayroll.basisImaging'), value: String(imagingCount) },
      { label: t('hrPayroll.basisRevenue'), value: formatCfl(revenueBase) },
      { label: t('staff.locumRate'), value: `${locumRate || 0}%` },
      { label: t('staff.contractSalary'), value: formatCfl(contractualSalary) },
      { label: t('hrPayroll.employeeSocial'), value: formatCfl(employeeSocial) },
      { label: t('hrPayroll.employerSocial'), value: formatCfl(employerSocial) },
      { label: t('hrPayroll.taxWithholding'), value: formatCfl(taxWithholding) },
      { label: t('staff.otherDeductions'), value: formatCfl(otherDeductions) },
    ],
  };
}

function downloadPayrollStatementFile(employee, period = getDefaultPayrollPeriod()) {
  const payroll = calculateEmployeePayroll(employee, period);
  const content = [
    'MediTrack Payroll Statement',
    `Employee: ${employee.name || getEmployeeIdentity(employee)}`,
    `Role: ${getEmployeeRoleLabel(employee)}`,
    `Position: ${employee.position || '-'}`,
    `Period: ${payroll.period}`,
    `Contract: ${formatEmploymentTypeLabel(employee.employmentType)}`,
    `Status: ${formatStaffStatusLabel(employee.staffStatus)}`,
    `Pay mode: ${formatPayModeLabel(employee.payMode)}`,
    `Contract start: ${formatDate(employee.contractStart) || '-'}`,
    `Date of birth: ${formatDate(employee.dob) || '-'}`,
    `Social reference: ${employee.socialId || '-'}`,
    `Gross: ${formatCfl(payroll.gross)}`,
    `Employee social: ${formatCfl(payroll.employeeSocial)}`,
    `Employer social: ${formatCfl(payroll.employerSocial)}`,
    `Tax withholding: ${formatCfl(payroll.taxWithholding)}`,
    `Other deductions: ${formatCfl(payroll.otherDeductions)}`,
    `Net due: ${formatCfl(payroll.netDue)}`,
    `Paid: ${formatCfl(payroll.paidAmount)}`,
    `Balance: ${formatCfl(payroll.balance)}`,
    `Assigned services: ${payroll.serviceCount}`,
    `Consultations: ${payroll.consultationCount}`,
    `Lab exams: ${payroll.labExamCount}`,
    `Imaging exams: ${payroll.imagingCount}`,
    `Revenue base: ${formatCfl(payroll.revenueBase)}`,
  ].join('\n');
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `payroll-${getEmployeeIdentity(employee) || 'employee'}-${payroll.period}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function renderHrEmployeeDetail(employee, payroll = null) {
  if (!hrEmployeeSummaryGrid || !hrPayrollBasisGrid) return;
  if (!employee || !payroll) {
    renderClinicalInfoGrid(hrEmployeeSummaryGrid, [{ label: t('hrPayroll.employeeSummary'), value: t('hrPayroll.noEmployeeSelected') }]);
    renderClinicalInfoGrid(hrPayrollBasisGrid, []);
    if (hrPaymentHistoryBody) renderClinicalEmptyRow(hrPaymentHistoryBody, 4);
    if (recordPayrollPaymentBtn) recordPayrollPaymentBtn.disabled = true;
    if (downloadPayrollStatementBtn) downloadPayrollStatementBtn.disabled = true;
    if (hrPaymentAmount) hrPaymentAmount.value = '';
    return;
  }
  renderClinicalInfoGrid(hrEmployeeSummaryGrid, [
    { label: t('staff.firstName'), value: employee.firstName || '-' },
    { label: t('staff.lastName'), value: employee.lastName || '-' },
    { label: t('staff.listRole'), value: getEmployeeRoleLabel(employee) },
    { label: t('staff.listPosition'), value: employee.position || '-' },
    { label: t('staff.sex'), value: employee.sex ? formatSexLabel(employee.sex) : '-' },
    { label: t('staff.dob'), value: formatDate(employee.dob) || '-' },
    { label: t('staff.contractStart'), value: formatDate(employee.contractStart) || '-' },
    { label: t('staff.listContract'), value: formatEmploymentTypeLabel(employee.employmentType) },
    { label: t('staff.listPayMode'), value: formatPayModeLabel(employee.payMode) },
    { label: t('staff.listStatus'), value: formatStaffStatusLabel(employee.staffStatus) },
    { label: t('staff.contractSalary'), value: formatCfl(employee.contractualSalary) },
    { label: t('staff.employeeSocialRate'), value: `${parseNumber(employee.employeeSocialRate)}%` },
    { label: t('staff.employerSocialRate'), value: `${parseNumber(employee.employerSocialRate)}%` },
    { label: t('staff.socialId'), value: employee.socialId || '-' },
    { label: t('staff.phone'), value: employee.phone || '-' },
    { label: t('staff.email'), value: employee.email || '-' },
    { label: t('hrPayroll.gross'), value: formatCfl(payroll.gross) },
    { label: t('hrPayroll.netDue'), value: formatCfl(payroll.netDue) },
    { label: t('hrPayroll.paid'), value: formatCfl(payroll.paidAmount) },
    { label: t('hrPayroll.balance'), value: formatCfl(payroll.balance) },
  ]);
  renderClinicalInfoGrid(hrPayrollBasisGrid, payroll.basis);
  if (hrPaymentHistoryBody) {
    hrPaymentHistoryBody.innerHTML = '';
    if (!payroll.payments.length) {
      renderClinicalEmptyRow(hrPaymentHistoryBody, 4);
    } else {
      payroll.payments
        .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
        .forEach((entry) => {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${formatDate(entry.createdAt) || '-'}</td><td>${formatPaymentMethodLabel(entry.method)}</td><td>${formatCfl(entry.amount)}</td><td>${escapeHtml(entry.note || '-')}</td>`;
          hrPaymentHistoryBody.appendChild(row);
        });
    }
  }
  if (recordPayrollPaymentBtn) recordPayrollPaymentBtn.disabled = payroll.balance <= 0;
  if (downloadPayrollStatementBtn) downloadPayrollStatementBtn.disabled = false;
  if (hrPaymentAmount) hrPaymentAmount.value = payroll.balance ? String(Math.round(payroll.balance)) : '';
}

function renderHrPayrollModule() {
  if (!hrPayrollView) return;
  const period = normalizePayrollPeriod(hrPayrollPeriod?.value || getDefaultPayrollPeriod());
  if (hrPayrollPeriod && hrPayrollPeriod.value !== period) hrPayrollPeriod.value = period;
  const filter = hrPayrollFilter?.value || 'all';
  const employees = loadEmployees();
  const rows = employees.map((employee) => ({ employee, payroll: calculateEmployeePayroll(employee, period) }));
  const filtered = rows.filter(({ employee, payroll }) => {
    if (filter === 'permanent') return employee.employmentType !== 'locum';
    if (filter === 'locum') return employee.employmentType === 'locum';
    if (filter === 'outstanding') return payroll.balance > 0;
    if (filter === 'paid') return payroll.netDue > 0 && payroll.balance <= 0;
    return true;
  });
  if (hrPayrollTotalEmployees) hrPayrollTotalEmployees.textContent = filtered.length.toString();
  if (hrPayrollTotalDue) hrPayrollTotalDue.textContent = formatCfl(filtered.reduce((sum, row) => sum + row.payroll.netDue, 0));
  if (hrPayrollTotalPaid) hrPayrollTotalPaid.textContent = formatCfl(filtered.reduce((sum, row) => sum + row.payroll.paidAmount, 0));
  if (hrPayrollTotalOutstanding) hrPayrollTotalOutstanding.textContent = formatCfl(filtered.reduce((sum, row) => sum + row.payroll.balance, 0));
  if (hrPayrollTableBody) {
    hrPayrollTableBody.innerHTML = '';
    if (!filtered.length) {
      renderClinicalEmptyRow(hrPayrollTableBody, 12);
    } else {
      filtered.sort((a, b) => (a.employee.name || '').localeCompare(b.employee.name || ''));
      filtered.forEach(({ employee, payroll }) => {
        const employeeId = getEmployeeIdentity(employee);
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${escapeHtml(employee.name || '-')}</td>
          <td>${escapeHtml(getEmployeeRoleLabel(employee))}</td>
          <td>${escapeHtml(employee.position || '-')}</td>
          <td>${escapeHtml(formatEmploymentTypeLabel(employee.employmentType))}</td>
          <td>${escapeHtml(formatPayModeLabel(employee.payMode))}</td>
          <td>${escapeHtml(formatCfl(payroll.gross))}</td>
          <td>${escapeHtml(formatCfl(payroll.employeeSocial))}</td>
          <td>${escapeHtml(formatCfl(payroll.employerSocial))}</td>
          <td>${escapeHtml(formatCfl(payroll.netDue))}</td>
          <td>${escapeHtml(formatCfl(payroll.paidAmount))}</td>
          <td>${escapeHtml(formatCfl(payroll.balance))}</td>
          <td><button type="button" class="ghost" data-payroll-employee="${escapeHtml(employeeId)}">${escapeHtml(t('hrPayroll.openEmployee'))}</button></td>
        `;
        hrPayrollTableBody.appendChild(row);
      });
    }
  }
  const selected = filtered.find(({ employee }) => getEmployeeIdentity(employee) === activePayrollEmployeeId) || filtered[0] || null;
  activePayrollEmployeeId = selected ? getEmployeeIdentity(selected.employee) : '';
  renderHrEmployeeDetail(selected?.employee || null, selected?.payroll || null);
}

function refreshHrPayrollIfVisible() {
  if (hrPayrollView && !hrPayrollView.classList.contains('hidden')) {
    renderHrPayrollModule();
  }
}

function renderStaffList() {
  if (!staffListBody) return;
  staffListBody.innerHTML = '';
  const employees = loadEmployees();
  if (!employees.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="7">${t('staff.listEmpty')}</td>`;
    staffListBody.appendChild(row);
    return;
  }
  employees.forEach((emp) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${escapeHtml(emp.name || '-')}</td>
      <td>${escapeHtml(getEmployeeRoleLabel(emp))}</td>
      <td>${escapeHtml(emp.position || '-')}</td>
      <td>${escapeHtml(formatEmploymentTypeLabel(emp.employmentType))}</td>
      <td>${escapeHtml(formatPayModeLabel(emp.payMode))}</td>
      <td>${escapeHtml(formatStaffStatusLabel(emp.staffStatus))}</td>
      <td>${escapeHtml(emp.code || '-')}</td>
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

function sumAccountingTotals(entries) {
  return entries.reduce(
    (acc, entry) => {
      acc.total += entry.totalAmount || 0;
      acc.insurance += entry.insurerAmount || 0;
      acc.patient += (entry.cashAmount || 0) + (entry.bankAmount || 0);
      acc.cash += entry.cashAmount || 0;
      acc.bank += entry.bankAmount || 0;
      return acc;
    },
    { total: 0, insurance: 0, patient: 0, cash: 0, bank: 0 }
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

const DASHBOARD_CARD_CONFIG = {
  default: {
    daily: ['patientsRegistered', 'admissions', 'consultationsCompleted', 'billedServices', 'totalBilled', 'collected', 'insurancePart', 'patientPart', 'hospitalizations'],
    monthly: ['patientsRegistered', 'billedServices', 'totalBilled', 'insurancePart', 'patientPart', 'admissions', 'stockConsumption', 'prescriptions'],
  },
  admin: {
    daily: ['patientsRegistered', 'admissions', 'consultationsCompleted', 'billedServices', 'totalBilled', 'collected', 'insurancePart', 'patientPart', 'hospitalizations'],
    monthly: ['patientsRegistered', 'billedServices', 'totalBilled', 'insurancePart', 'patientPart', 'admissions', 'stockConsumption', 'prescriptions'],
  },
  director: {
    daily: ['patientsRegistered', 'admissions', 'consultationsCompleted', 'billedServices', 'totalBilled', 'collected', 'insurancePart', 'patientPart', 'hospitalizations', 'labImaging'],
    monthly: ['patientsRegistered', 'billedServices', 'totalBilled', 'insurancePart', 'patientPart', 'admissions', 'stockConsumption', 'prescriptions'],
  },
  accountant: {
    daily: ['totalBilled', 'collected', 'insurancePart', 'patientPart', 'billedServices'],
    monthly: ['totalBilled', 'collected', 'insurancePart', 'patientPart', 'billedServices', 'stockConsumption'],
  },
  admission: {
    daily: ['patientsRegistered', 'admissions', 'billedServices', 'totalBilled', 'collected', 'insurancePart', 'patientPart', 'hospitalizations'],
    monthly: ['patientsRegistered', 'billedServices', 'totalBilled', 'insurancePart', 'patientPart', 'admissions'],
  },
  doctor: {
    daily: ['patientsRegistered', 'consultationsCompleted', 'labImaging', 'prescriptions'],
    monthly: ['patientsRegistered', 'consultationsCompleted', 'hospitalizations', 'prescriptions', 'totalBilled'],
  },
  nurse: {
    daily: ['patientsRegistered', 'admissions', 'hospitalizations', 'stockConsumption'],
    monthly: ['patientsRegistered', 'admissions', 'hospitalizations', 'stockConsumption'],
  },
  lab: {
    daily: ['labImaging', 'billedServices'],
    monthly: ['labImaging', 'billedServices', 'totalBilled'],
  },
  radiology: {
    daily: ['labImaging', 'billedServices'],
    monthly: ['labImaging', 'billedServices', 'totalBilled'],
  },
  pharmacy: {
    daily: ['billedServices', 'patientPart', 'stockConsumption', 'prescriptions'],
    monthly: ['billedServices', 'patientPart', 'stockConsumption', 'prescriptions'],
  },
};

const DASHBOARD_CURRENCY_METRICS = new Set(['totalBilled', 'collected', 'insurancePart', 'patientPart']);
const DASHBOARD_TREND_METRICS = {
  default: ['patients', 'revenue', 'services', 'hospitalizations', 'labImaging', 'prescriptions', 'stock'],
  admin: ['patients', 'revenue', 'services', 'hospitalizations', 'labImaging', 'prescriptions', 'stock'],
  director: ['patients', 'revenue', 'services', 'hospitalizations', 'labImaging', 'prescriptions', 'stock'],
  accountant: ['revenue', 'services', 'patients', 'stock'],
  admission: ['patients', 'services', 'revenue', 'hospitalizations'],
  doctor: ['patients', 'services', 'hospitalizations', 'labImaging', 'prescriptions', 'revenue'],
  nurse: ['patients', 'hospitalizations', 'stock', 'prescriptions'],
  lab: ['labImaging', 'services', 'revenue'],
  radiology: ['labImaging', 'services', 'revenue'],
  pharmacy: ['services', 'stock', 'prescriptions', 'revenue'],
};

function parseDateValue(value) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function isSameCalendarDay(date, reference) {
  return !!date && date.getFullYear() === reference.getFullYear() && date.getMonth() === reference.getMonth() && date.getDate() === reference.getDate();
}

function isSameCalendarMonth(date, reference) {
  return !!date && date.getFullYear() === reference.getFullYear() && date.getMonth() === reference.getMonth();
}

function isWithinRange(date, start, end) {
  return !!date && date >= start && date < end;
}

function getMonthLabels() {
  const locale = currentLang === 'fr' ? 'fr-FR' : 'en-US';
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
  return Array.from({ length: 12 }, (_, index) => formatter.format(new Date(2026, index, 1)));
}

function getDashboardCategoryBucket(category) {
  const normalized = normalizeServiceCategory(category);
  const bucketMap = {
    accouchement: 'hospitalization',
    acte_gynecologique: 'surgery',
    anatomie_pathologique: 'lab',
    bacteriologie: 'lab',
    biochimie: 'lab',
    biologie_moleculaire: 'lab',
    certificat_medical: 'consultation',
    chirurgie: 'surgery',
    consultation_bucco_dentaire: 'consultation',
    consultation_mg: 'consultation',
    consultation_sf: 'consultation',
    consultation_specialiste: 'consultation',
    consultation_visite: 'consultation',
    echographie: 'imaging',
    electrocardiogramme: 'imaging',
    endoscopie: 'imaging',
    expertise_dentaire: 'consultation',
    hematologie: 'lab',
    hospitalisation: 'hospitalization',
    imagerie_interventionnelle: 'imaging',
    immuno_serologie: 'lab',
    irm: 'imaging',
    location_bloc: 'surgery',
    mycologie: 'lab',
    orl: 'consultation',
    parasitologie: 'lab',
    pharmacie: 'pharmacy',
    radiologie: 'imaging',
    scanner: 'imaging',
    soins_chirurgie_bucco_dentaire: 'surgery',
    vaccination: 'outpatient',
  };
  return bucketMap[normalized] || normalized || 'other';
}

function hasEncounterPrescription(encounter) {
  const consult = encounter?.doctorConsultation;
  return !!(consult && (consult.prescriptionType || (consult.medications || []).length || (consult.tests || []).length));
}

function isHospitalizationEncounter(encounter) {
  if (!encounter) return false;
  if (['day', 'full'].includes(encounter.nurseAssessment?.mode || '')) return true;
  if (['day_hospitalization', 'full_hospitalization'].includes(encounter.doctorConsultation?.prescriptionType || '')) return true;
  return (encounter.services || []).some((item) => getDashboardCategoryBucket(item.category) === 'hospitalization');
}

function getCurrentEmployeeKey() {
  return currentEmployee?.code || currentEmployee?.email || currentEmployee?.name || '';
}

function matchesCurrentEmployeeProvider(record) {
  const key = getCurrentEmployeeKey();
  const name = currentEmployee?.name || '';
  return [record?.providerId, record?.doctor].includes(key) || [record?.providerName, record?.doctorName].includes(name);
}

function buildDashboardAnalytics() {
  const synchronized = syncFacilityInterconnections();
  const receipts = synchronized.receipts;
  const encounters = synchronized.encounters;
  const appointments = synchronized.appointments;
  const items = receipts.flatMap((receipt) =>
    (receipt.items || []).map((item, index) => ({
      ...item,
      id: `${receipt.id}-${index}`,
      createdAt: item.createdAt || receipt.createdAt,
      receiptId: receipt.id,
      encounterId: item.encounterId || receipt.encounterId || '',
      patientId: receipt.patientId || item.patientId || '',
      patientName: receipt.patientName || '',
      doctor: receipt.doctor || item.providerId || '',
      doctorName: receipt.doctorName || item.providerName || '',
      appointmentId: receipt.appointmentId || item.appointmentId || '',
    }))
  );
  return {
    now: new Date(),
    patients: synchronized.patients,
    employees: loadEmployees(),
    services: loadServiceCatalog(),
    insurers: seedInsurancePartnersIfEmpty(),
    appointments,
    receipts,
    encounters,
    accountingEntries: synchronized.accountingEntries,
    stockMovements: loadStockMovements(),
    items,
  };
}

function scopeDashboardAnalytics(analytics, role) {
  const scoped = {
    ...analytics,
    appointments: [...(analytics.appointments || [])],
    receipts: [...analytics.receipts],
    encounters: [...analytics.encounters],
    accountingEntries: [...analytics.accountingEntries],
    stockMovements: [...analytics.stockMovements],
    items: [...analytics.items],
  };
  if (role === 'doctor') {
    scoped.encounters = scoped.encounters.filter((encounter) => matchesCurrentEmployeeProvider(encounter));
    const receiptIds = new Set(
      scoped.receipts
        .filter((receipt) => matchesCurrentEmployeeProvider(receipt))
        .map((receipt) => receipt.id)
    );
    scoped.items = scoped.items.filter((item) => matchesCurrentEmployeeProvider(item) || receiptIds.has(item.receiptId));
    scoped.receipts = scoped.receipts.filter((receipt) => receiptIds.has(receipt.id));
    scoped.appointments = scoped.appointments.filter((appointment) => appointment.doctor === getCurrentEmployeeKey() || appointment.doctorName === currentEmployee?.name);
    const scopedEncounterIds = new Set(scoped.encounters.map((encounter) => encounter.id));
    scoped.accountingEntries = scoped.accountingEntries.filter(
      (entry) => receiptIds.has(entry.receiptId) || scopedEncounterIds.has(entry.encounterId)
    );
    return scoped;
  }
  if (role === 'lab') {
    scoped.items = scoped.items.filter((item) => getDashboardCategoryBucket(item.category) === 'lab');
    scoped.encounters = scoped.encounters.filter((encounter) => getEncounterLabStatus(encounter) !== 'not_applicable');
  } else if (role === 'radiology') {
    scoped.items = scoped.items.filter((item) => getDashboardCategoryBucket(item.category) === 'imaging');
    scoped.encounters = scoped.encounters.filter((encounter) => getEncounterLabRequestsForStatus(encounter).some((entry) => {
      const service = loadServiceCatalog().find((item) => item.id === entry.serviceId);
      return getDashboardCategoryBucket(service?.category || '') === 'imaging';
    }));
  } else if (role === 'pharmacy') {
    scoped.items = scoped.items.filter((item) => getDashboardCategoryBucket(item.category) === 'pharmacy');
    scoped.encounters = scoped.encounters.filter((encounter) => hasEncounterPharmacyNeed(encounter));
    scoped.stockMovements = scoped.stockMovements.filter((movement) => movement.sourceModule === 'pharmacy' || normalizeStockType(movement.itemType) === 'medication');
  } else if (role === 'nurse') {
    scoped.encounters = scoped.encounters.filter((encounter) => !!encounter.nurseAssessment);
    scoped.stockMovements = scoped.stockMovements.filter(
      (movement) => movement.sourceModule === 'nurse' || movement.recordedBy === currentEmployee?.name || movement.recordedBy === currentEmployee?.code
    );
  }
  if (['lab', 'radiology', 'pharmacy'].includes(role)) {
    const receiptIds = new Set(scoped.items.map((item) => item.receiptId).filter(Boolean));
    const encounterIds = new Set(scoped.encounters.map((encounter) => encounter.id));
    scoped.receipts = scoped.receipts.filter((receipt) => receiptIds.has(receipt.id) || encounterIds.has(receipt.encounterId));
    scoped.accountingEntries = scoped.accountingEntries.filter((entry) => receiptIds.has(entry.receiptId) || encounterIds.has(entry.encounterId));
  }
  return scoped;
}

function summarizeDashboardScope(scope, predicate) {
  const encounters = scope.encounters.filter((encounter) => predicate(parseDateValue(encounter.createdAt)));
  const items = scope.items.filter((item) => predicate(parseDateValue(item.createdAt)));
  const accountingEntries = scope.accountingEntries.filter((entry) => predicate(parseDateValue(entry.createdAt)));
  const stockMovements = scope.stockMovements.filter((movement) => predicate(parseDateValue(movement.createdAt)));
  const patientIds = new Set([
    ...encounters.map((encounter) => encounter.patientId),
    ...items.map((item) => item.patientId),
  ].filter(Boolean));
  const totalBilled = items.reduce((sum, item) => sum + (item.total || 0), 0);
  const accountingPatient = accountingEntries.reduce(
    (sum, entry) => sum + (entry.cashAmount || 0) + (entry.bankAmount || 0),
    0
  );
  const accountingInsurance = accountingEntries.reduce((sum, entry) => sum + (entry.insurerAmount || 0), 0);
  const patientPart = items.reduce((sum, item) => sum + (item.patient || 0), 0);
  const insurancePart = items.reduce((sum, item) => sum + (item.insurance || 0), 0);
  return {
    patientsRegistered: patientIds.size,
    consultationsCompleted: encounters.filter((encounter) => encounter.status === 'doctor-completed' || encounter.doctorConsultation).length,
    billedServices: items.length,
    totalBilled,
    collected: accountingPatient || patientPart,
    insurancePart: accountingInsurance || insurancePart,
    patientPart: patientPart || accountingPatient,
    admissions: encounters.length,
    hospitalizations: encounters.filter((encounter) => isHospitalizationEncounter(encounter)).length,
    labImaging: items.filter((item) => {
      const bucket = getDashboardCategoryBucket(item.category);
      return bucket === 'lab' || bucket === 'imaging';
    }).length,
    prescriptions: encounters.filter((encounter) => hasEncounterPrescription(encounter)).length,
    stockConsumption: stockMovements
      .filter((movement) => movement.movementType === 'consumption')
      .reduce((sum, movement) => sum + (movement.qty || 0), 0),
  };
}

function getDashboardMetricValue(summary, metric) {
  const mapping = {
    patients: summary.patientsRegistered,
    revenue: summary.totalBilled,
    services: summary.billedServices,
    hospitalizations: summary.hospitalizations,
    labImaging: summary.labImaging,
    prescriptions: summary.prescriptions,
    stock: summary.stockConsumption,
  };
  return mapping[metric] || 0;
}

function formatDashboardMetricValue(metric, value) {
  if (DASHBOARD_CURRENCY_METRICS.has(metric)) {
    return formatCfl(value || 0);
  }
  return String(Math.round(value || 0));
}

function renderDashboardCards(container, metricKeys, summary) {
  if (!container) return;
  container.innerHTML = '';
  metricKeys.forEach((metric) => {
    const card = document.createElement('div');
    card.className = 'dash-card';
    card.innerHTML = `
      <p>${t(`dashboard.metric${metric.charAt(0).toUpperCase()}${metric.slice(1)}`)}</p>
      <strong>${formatDashboardMetricValue(metric, summary[metric] || 0)}</strong>
    `;
    container.appendChild(card);
  });
}

function renderDashboardTable(tbody, rows, firstColumnKey = 'label', secondColumnKey = 'today', thirdColumnKey = 'month', fourthColumnKey = 'amount') {
  if (!tbody) return;
  tbody.innerHTML = '';
  if (!rows.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="4">${t('dashboard.noData')}</td>`;
    tbody.appendChild(row);
    return;
  }
  rows.forEach((entry) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${entry[firstColumnKey]}</td>
      <td>${entry[secondColumnKey]}</td>
      <td>${entry[thirdColumnKey]}</td>
      <td>${formatCfl(entry[fourthColumnKey] || 0)}</td>
    `;
    tbody.appendChild(row);
  });
}

function buildDashboardActivityRows(items, now) {
  const categoryMap = new Map();
  const serviceMap = new Map();
  items.forEach((item) => {
    const date = parseDateValue(item.createdAt);
    if (!date) return;
    const isToday = isSameCalendarDay(date, now);
    const isMonth = isSameCalendarMonth(date, now);
    if (!isMonth) return;
    const categoryLabel = item.categoryLabel || getServiceCategoryLabel(item.category) || '-';
    const serviceLabel = item.label || '-';
    if (!categoryMap.has(categoryLabel)) {
      categoryMap.set(categoryLabel, { label: categoryLabel, today: 0, month: 0, amount: 0 });
    }
    if (!serviceMap.has(serviceLabel)) {
      serviceMap.set(serviceLabel, { label: serviceLabel, today: 0, month: 0, amount: 0 });
    }
    const categoryRow = categoryMap.get(categoryLabel);
    const serviceRow = serviceMap.get(serviceLabel);
    categoryRow.month += 1;
    serviceRow.month += 1;
    categoryRow.amount += item.total || 0;
    serviceRow.amount += item.total || 0;
    if (isToday) {
      categoryRow.today += 1;
      serviceRow.today += 1;
    }
  });
  return {
    categories: Array.from(categoryMap.values()).sort((a, b) => b.month - a.month || b.amount - a.amount).slice(0, 10),
    services: Array.from(serviceMap.values()).sort((a, b) => b.month - a.month || b.amount - a.amount).slice(0, 10),
  };
}

function renderTrendChart(container, labels, series) {
  if (!container) return;
  const values = series.flatMap((entry) => entry.values || []);
  const maxValue = Math.max(0, ...values);
  if (!maxValue) {
    container.innerHTML = `<p class="muted">${t('dashboard.noData')}</p>`;
    return;
  }
  const width = 640;
  const height = 240;
  const paddingX = 42;
  const paddingY = 24;
  const plotWidth = width - paddingX * 2;
  const plotHeight = height - paddingY * 2;
  const stepX = labels.length > 1 ? plotWidth / (labels.length - 1) : plotWidth;
  const palette = ['#12355a', '#2d6a9f', '#4c9ad4', '#7bb8e8'];
  const gridLines = Array.from({ length: 5 }, (_, index) => {
    const y = paddingY + (plotHeight / 4) * index;
    return `<line x1="${paddingX}" y1="${y}" x2="${width - paddingX}" y2="${y}" stroke="#d9e6ef" stroke-width="1" />`;
  }).join('');
  const xLabels = labels.map((label, index) => {
    const x = paddingX + stepX * index;
    return `<text x="${x}" y="${height - 6}" text-anchor="middle" font-size="11" fill="#5b7286">${label}</text>`;
  }).join('');
  const yMaxLabel = `<text x="10" y="${paddingY + 4}" font-size="11" fill="#5b7286">${Math.round(maxValue)}</text>`;
  const yMinLabel = `<text x="16" y="${height - paddingY}" font-size="11" fill="#5b7286">0</text>`;
  const chartSeries = series.map((entry, index) => {
    const color = palette[index % palette.length];
    const points = entry.values.map((value, pointIndex) => {
      const x = paddingX + stepX * pointIndex;
      const y = height - paddingY - (value / maxValue) * plotHeight;
      return `${x},${y}`;
    }).join(' ');
    const circles = entry.values.map((value, pointIndex) => {
      const x = paddingX + stepX * pointIndex;
      const y = height - paddingY - (value / maxValue) * plotHeight;
      return `<circle cx="${x}" cy="${y}" r="3.5" fill="${color}" />`;
    }).join('');
    return `<polyline points="${points}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />${circles}`;
  }).join('');
  const legend = series.map((entry, index) => {
    const color = palette[index % palette.length];
    return `<span class="trend-legend-item"><span class="trend-dot" style="background:${color}"></span>${entry.name}</span>`;
  }).join('');
  container.innerHTML = `
    <svg class="trend-chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
      ${gridLines}
      <line x1="${paddingX}" y1="${height - paddingY}" x2="${width - paddingX}" y2="${height - paddingY}" stroke="#8ea4b7" stroke-width="1.2" />
      <line x1="${paddingX}" y1="${paddingY}" x2="${paddingX}" y2="${height - paddingY}" stroke="#8ea4b7" stroke-width="1.2" />
      ${chartSeries}
      ${xLabels}
      ${yMaxLabel}
      ${yMinLabel}
    </svg>
    <div class="trend-legend">${legend}</div>
  `;
}

function getDashboardYears(scope) {
  const years = new Set();
  [
    ...scope.items.map((item) => parseDateValue(item.createdAt)),
    ...scope.encounters.map((encounter) => parseDateValue(encounter.createdAt)),
    ...scope.accountingEntries.map((entry) => parseDateValue(entry.createdAt)),
    ...scope.stockMovements.map((movement) => parseDateValue(movement.createdAt)),
  ].filter(Boolean).forEach((date) => years.add(date.getFullYear()));
  if (!years.size) years.add(new Date().getFullYear());
  return Array.from(years).sort((a, b) => a - b).slice(-3);
}

function buildDashboardTrendSeries(scope, metric) {
  const now = scope.now;
  const monthLabels = getMonthLabels();
  const monthlySeries = {
    name: t(`dashboard.metric${metric.charAt(0).toUpperCase()}${metric.slice(1)}`),
    values: Array.from({ length: 12 }, (_, monthIndex) => {
      const start = new Date(now.getFullYear(), monthIndex, 1);
      const end = new Date(now.getFullYear(), monthIndex + 1, 1);
      const summary = summarizeDashboardScope(scope, (date) => isWithinRange(date, start, end));
      return getDashboardMetricValue(summary, metric);
    }),
  };
  const yearlySeries = getDashboardYears(scope).map((year) => ({
    name: String(year),
    values: Array.from({ length: 12 }, (_, monthIndex) => {
      const start = new Date(year, monthIndex, 1);
      const end = new Date(year, monthIndex + 1, 1);
      const summary = summarizeDashboardScope(scope, (date) => isWithinRange(date, start, end));
      return getDashboardMetricValue(summary, metric);
    }),
  }));
  return { labels: monthLabels, monthlySeries: [monthlySeries], yearlySeries };
}

function getDashboardCardConfig(role) {
  return DASHBOARD_CARD_CONFIG[role] || DASHBOARD_CARD_CONFIG.default;
}

function getTrendMetricsForRole(role) {
  return DASHBOARD_TREND_METRICS[role] || DASHBOARD_TREND_METRICS.default;
}

function renderDashboardTrendOptions(role) {
  if (!dashboardTrendMetric) return;
  const allowed = new Set(getTrendMetricsForRole(role));
  const options = Array.from(dashboardTrendMetric.options);
  options.forEach((option) => {
    option.hidden = !allowed.has(option.value);
  });
  if (!allowed.has(dashboardTrendMetric.value)) {
    dashboardTrendMetric.value = getTrendMetricsForRole(role)[0] || 'patients';
  }
}

function renderStaffDistributionTable(target, employees, colSpan = 2) {
  if (!target) return;
  const counts = employees.reduce((acc, employee) => {
    const label = getEmployeeRoleLabel(employee) || t('dashboard.noData');
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});
  target.innerHTML = '';
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (!rows.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="${colSpan}">${t('dashboard.noData')}</td>`;
    target.appendChild(row);
    return;
  }
  rows.forEach(([label, value]) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${label}</td><td>${value}</td>`;
    target.appendChild(row);
  });
}

function renderDashboardOverview(analytics, role) {
  if (!dashboardOverviewSection) return;
  const hideOverview = role === 'hr';
  dashboardOverviewSection.classList.toggle('hidden', hideOverview);
  if (hideOverview) return;
  const scoped = scopeDashboardAnalytics(analytics, role);
  const todaySummary = summarizeDashboardScope(scoped, (date) => isSameCalendarDay(date, analytics.now));
  const monthSummary = summarizeDashboardScope(scoped, (date) => isSameCalendarMonth(date, analytics.now));
  const config = getDashboardCardConfig(role);
  renderDashboardCards(dashboardDailyCards, config.daily, todaySummary);
  renderDashboardCards(dashboardMonthlyCards, config.monthly, monthSummary);
  const rows = buildDashboardActivityRows(scoped.items, analytics.now);
  renderDashboardTable(dashboardCategoryTable, rows.categories);
  renderDashboardTable(dashboardServiceTable, rows.services);
  renderDashboardTrendOptions(role);
  const metric = dashboardTrendMetric?.value || getTrendMetricsForRole(role)[0] || 'patients';
  const trend = buildDashboardTrendSeries(scoped, metric);
  renderTrendChart(dashboardMonthlyTrendChart, trend.labels, trend.monthlySeries);
  renderTrendChart(dashboardYearlyTrendChart, trend.labels, trend.yearlySeries);
}

function renderRoleDashboard() {
  if (!currentEmployee?.role) return;
  filterSectionByRole();
  const analytics = buildDashboardAnalytics();
  const role = currentEmployee.role;
  const scope = scopeDashboardAnalytics(analytics, role);
  const todaySummary = summarizeDashboardScope(scope, (date) => isSameCalendarDay(date, analytics.now));
  const monthSummary = summarizeDashboardScope(scope, (date) => isSameCalendarMonth(date, analytics.now));
  const lastSevenDaysAdmissions = analytics.encounters.filter((encounter) => {
    const date = parseDateValue(encounter.createdAt);
    return !!date && analytics.now.getTime() - date.getTime() <= 7 * 24 * 60 * 60 * 1000;
  }).length;

  if (dashboardRoleLabel) {
    const roleLabel = currentEmployee.roleLabel || currentEmployee.role || '';
    dashboardRoleLabel.textContent = t('dashboard.roleLabel').replace('{role}', roleLabel);
  }

  renderDashboardOverview(analytics, role);

  if (role === 'admission') {
    if (admTotalPatients) admTotalPatients.textContent = analytics.patients.length.toString();
    if (admVisitsToday) admVisitsToday.textContent = todaySummary.admissions.toString();
    if (admVisitsWeek) admVisitsWeek.textContent = lastSevenDaysAdmissions.toString();
    if (admVisitsMonth) admVisitsMonth.textContent = monthSummary.admissions.toString();
    if (admPaidPatients) admPaidPatients.textContent = formatCfl(monthSummary.patientPart);
    if (admPaidInsurance) admPaidInsurance.textContent = formatCfl(monthSummary.insurancePart);
    if (admStaffTable) {
      const counts = analytics.encounters.reduce((acc, rec) => {
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
      if (!admStaffTable.children.length) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="2">${t('dashboard.noData')}</td>`;
        admStaffTable.appendChild(row);
      }
    }
  }

  if (role === 'admin') {
    if (adminStaffCount) adminStaffCount.textContent = analytics.employees.length.toString();
    if (adminServiceCatalogCount) adminServiceCatalogCount.textContent = analytics.services.length.toString();
    if (adminInsurancePartnersCount) adminInsurancePartnersCount.textContent = analytics.insurers.length.toString();
    if (adminTodayAdmissions) adminTodayAdmissions.textContent = todaySummary.admissions.toString();
    renderStaffDistributionTable(adminRoleMixTable, analytics.employees);
  }

  if (role === 'doctor') {
    const docKey = currentEmployee.code || currentEmployee.email || currentEmployee.name;
    const assigned = analytics.patients.filter((p) => p.doctor === docKey);
    const assignedEncounters = scope.encounters.filter(
      (encounter) => encounter.doctor === docKey || encounter.doctorName === currentEmployee.name
    );
    if (docPatientsCount) docPatientsCount.textContent = assigned.length.toString();
    if (docUpcoming) {
      const upcoming = scope.appointments.filter(
        (appt) => appt.doctor === docKey && ['scheduled', 'arrived', 'in_care'].includes(appt.status)
      ).length;
      docUpcoming.textContent = upcoming.toString();
    }
    if (docCompleted) {
      const completed = assignedEncounters.filter(
        (encounter) => encounter.status === 'doctor-completed'
      ).length;
      docCompleted.textContent = completed.toString();
    }
    const payslip = calculateDoctorPayslip(currentEmployee);
    if (docRemuneration) docRemuneration.textContent = formatCfl(payslip.net);
    if (docPatientList) {
      docPatientList.innerHTML = '';
      assignedEncounters.slice(0, 6).forEach((p) => {
        const li = document.createElement('li');
        li.textContent = p.patientName || '-';
        docPatientList.appendChild(li);
      });
    }
    if (docGross) docGross.textContent = formatCfl(payslip.gross);
    if (docOtr) docOtr.textContent = formatCfl(payslip.otr);
    if (docNet) docNet.textContent = formatCfl(payslip.net);
    populateDoctorEncounterOptions();
    populateDoctorTestOptions();
    populateDoctorStockOptions();
    renderDoctorExamResults();
  }

  if (role === 'nurse') {
    if (nursePatients) nursePatients.textContent = monthSummary.patientsRegistered.toString();
    if (nurseTasks) nurseTasks.textContent = analytics.encounters.filter((encounter) => {
      const date = parseDateValue(encounter.nurseAssessment?.recordedAt);
      return !!date && isSameCalendarDay(date, analytics.now);
    }).length.toString();
    if (nurseMonthly) nurseMonthly.textContent = analytics.encounters.filter((encounter) => !!encounter.nurseAssessment).length.toString();
    renderDoctorPayments(nurseDoctorPayments);
    populateNurseEncounterOptions();
    populateNurseStockOptions();
  }

  if (role === 'lab') {
    if (labPending) labPending.textContent = todaySummary.labImaging.toString();
    if (labInProgress) labInProgress.textContent = monthSummary.labImaging.toString();
    if (labCompleted) labCompleted.textContent = analytics.items.filter((item) => getDashboardCategoryBucket(item.category) === 'lab').length.toString();
  }

  if (role === 'radiology') {
    const imagingItems = analytics.items.filter((item) => getDashboardCategoryBucket(item.category) === 'imaging');
    if (radioScheduled) radioScheduled.textContent = todaySummary.labImaging.toString();
    if (radioCompleted) radioCompleted.textContent = imagingItems.length.toString();
  }

  if (role === 'pharmacy') {
    const queue = getPharmacyQueueRecords();
    if (pharmacyPending) pharmacyPending.textContent = queue.filter((entry) => entry.status !== 'dispensed').length.toString();
    if (pharmacyDispensed) pharmacyDispensed.textContent = queue.filter((entry) => entry.status === 'dispensed').length.toString();
    updateStockAlerts();
    renderPharmacyQueue();
  }

  if (role === 'accountant') {
    const receivables = getInsuranceReceivablesSummary(analytics.now);
    if (accRevenue) accRevenue.textContent = formatCfl(monthSummary.totalBilled);
    if (accPatient) accPatient.textContent = formatCfl(monthSummary.patientPart);
    if (accInsurance) accInsurance.textContent = formatCfl(receivables.insurerPayments);
    if (accOutstanding) accOutstanding.textContent = formatCfl(receivables.outstanding);
    if (accCashPayments) {
      const cash = analytics.accountingEntries
        .filter((entry) => isSameCalendarMonth(parseDateValue(entry.createdAt), analytics.now))
        .reduce((sum, entry) => sum + (entry.cashAmount || 0), 0);
      accCashPayments.textContent = formatCfl(cash);
    }
    if (accBankPayments) {
      const bank = analytics.accountingEntries
        .filter((entry) => isSameCalendarMonth(parseDateValue(entry.createdAt), analytics.now))
        .reduce((sum, entry) => sum + (entry.bankAmount || 0), 0);
      accBankPayments.textContent = formatCfl(bank);
    }
    renderDoctorPayments(accDoctorPayments);
  }

  if (role === 'director') {
    if (dirPatients) dirPatients.textContent = monthSummary.patientsRegistered.toString();
    if (dirServices) dirServices.textContent = monthSummary.billedServices.toString();
    if (dirRevenue) dirRevenue.textContent = formatCfl(monthSummary.totalBilled);
    if (dirStaffProductivity) {
      const staffCount = analytics.employees.length || 1;
      dirStaffProductivity.textContent = Math.round(monthSummary.billedServices / staffCount).toString();
    }
  }

  if (role === 'hr') {
    const staff = analytics.employees;
    const period = getDefaultPayrollPeriod();
    const permanent = staff.filter((employee) => employee.employmentType !== 'locum').length;
    const locum = staff.filter((employee) => employee.employmentType === 'locum').length;
    const payrollEstimate = staff.reduce((sum, employee) => sum + calculateEmployeePayroll(employee, period).netDue, 0);
    if (hrStaffTotal) hrStaffTotal.textContent = staff.length.toString();
    if (hrPermanentTotal) hrPermanentTotal.textContent = permanent.toString();
    if (hrLocumTotal) hrLocumTotal.textContent = locum.toString();
    if (hrPayrollEstimate) hrPayrollEstimate.textContent = formatCfl(payrollEstimate);
    renderStaffDistributionTable(hrRoleMixTable, staff);
  }
}

function refreshDashboardIfVisible() {
  if (roleDashboardView && !roleDashboardView.classList.contains('hidden')) {
    renderRoleDashboard();
  }
}

function populateDoctorSelect() {
  if (!assignDoctor) return;
  const currentValue = assignDoctor.value;
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
  assignDoctor.value = currentValue;
}

function updateBillingTotals() {
  if (!billingTableBody) return;
  let total = 0;
  let insuranceTotal = 0;
  let patientTotal = 0;
  const selectedProvider = normalizeProvider(insuranceProvider?.value);
  const isInsured = patientInsuranceStatus?.value === 'yes' && !!selectedProvider;
  const provider = isInsured ? selectedProvider : '';
  const coverage = isInsured ? parseNumber(coverageRate?.value) : 0;
  const baseMultiplier = provider === 'INAM' || provider === 'AMU' ? 0.8 : 1;
  billingTableBody.querySelectorAll('tr').forEach((row) => {
    const qtyInput = row.querySelector('.billing-qty');
    const priceInput = row.querySelector('.billing-price');
    const baseInput = row.querySelector('.billing-base');
    const actualInput = row.querySelector('.billing-actual');
    const totalCell = row.querySelector('.billing-total');
    const providerCell = row.querySelector('.billing-provider');
    const insuranceCell = row.querySelector('.billing-insurance');
    const rateCell = row.querySelector('.billing-rate');
    const qty = parseNumber(qtyInput?.value);
    const price = parseNumber(priceInput?.value);
    const baseMode = baseInput?.dataset.manual || '';
    const baseManual = baseMode === 'true';
    const baseFromCatalog = baseMode === 'catalog';
    let baseUnit = parseNumber(baseInput?.value);
    const lineTotal = qty * price;
    if (baseInput && !baseManual && !baseFromCatalog && price > 0) {
      baseUnit = Math.round(price * baseMultiplier);
      baseInput.value = baseUnit || '';
    }
    if (totalCell) {
      totalCell.textContent = formatCfl(lineTotal);
    }
    const baseTotalRaw = qty * baseUnit;
    const baseTotal = baseTotalRaw > 0 ? Math.min(baseTotalRaw, lineTotal) : lineTotal;
    const insurance = coverage ? baseTotal * (coverage / 100) : 0;
    const actualDefault = Math.max(0, lineTotal - insurance);
    if (providerCell) {
      providerCell.textContent = isInsured ? provider : '-';
    }
    if (actualInput) {
      actualInput.value = actualDefault ? Math.round(actualDefault) : '';
    }
    if (insuranceCell) insuranceCell.textContent = formatCfl(insurance);
    if (rateCell) rateCell.textContent = coverage ? `${coverage}%` : '--';
    total += lineTotal;
    insuranceTotal += insurance;
    patientTotal += actualDefault;
  });
  if (billingTotal) billingTotal.textContent = formatCfl(total);
  if (insuranceShare) insuranceShare.textContent = formatCfl(insuranceTotal);
  if (patientShare) patientShare.textContent = formatCfl(patientTotal);
}

function getCatalogServicesByCategory(category) {
  const normalizedCategory = normalizeServiceCategory(category);
  return loadServiceCatalog().filter(
    (item) => normalizeServiceCategory(item.category) === normalizedCategory
  );
}

function populateBillingServiceOptions(row, preserveServiceId = '') {
  const categorySelect = row.querySelector('.billing-category');
  const serviceSelect = row.querySelector('.billing-service');
  if (!categorySelect || !serviceSelect) return;
  const category = categorySelect.value;
  serviceSelect.innerHTML = `<option value="">${t('billing.servicePlaceholder')}</option>`;
  serviceSelect.disabled = !category;
  if (!category) return;
  const services = getCatalogServicesByCategory(category).sort((a, b) =>
    (a.name || '').localeCompare(b.name || '')
  );
  services.forEach((service) => {
    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = service.name || '-';
    serviceSelect.appendChild(option);
  });
  serviceSelect.value = preserveServiceId || '';
}

function applyCatalogServiceToBillingRow(row) {
  const categorySelect = row.querySelector('.billing-category');
  const serviceSelect = row.querySelector('.billing-service');
  const codeInput = row.querySelector('.billing-code');
  const inamInput = row.querySelector('.billing-inam');
  const priceInput = row.querySelector('.billing-price');
  const baseInput = row.querySelector('.billing-base');
  if (!categorySelect || !serviceSelect) return;
  const category = categorySelect.value;
  const serviceId = serviceSelect.value;
  const service = loadServiceCatalog().find((item) => item.id === serviceId);
  if (!service) {
    if (codeInput) codeInput.value = '';
    if (inamInput) inamInput.value = '';
    if (priceInput) priceInput.value = '';
    if (baseInput) {
      baseInput.value = '';
      baseInput.dataset.manual = '';
    }
    updateBillingTotals();
    return;
  }
  const pricing = resolveServicePricing(
    {
      category: category || service.category,
      label: service.name,
      code: service.code || service.diseaseCode || '',
      inam: service.inamCode || '',
      price: service.uninsuredPrice || 0,
    },
    patientInsuranceStatus?.value === 'yes' ? normalizeProvider(insuranceProvider?.value) : ''
  );
  if (codeInput) codeInput.value = pricing.code || service.code || service.diseaseCode || '';
  if (inamInput) inamInput.value = pricing.inamCode || service.inamCode || '';
  if (priceInput) priceInput.value = pricing.price || 0;
  if (baseInput) {
    baseInput.value = pricing.base !== '' ? pricing.base : '';
    baseInput.dataset.manual = pricing.base !== '' ? 'catalog' : '';
  }
  updateBillingTotals();
}

function refreshBillingRowsFromCatalog() {
  if (!billingTableBody) return;
  billingTableBody.querySelectorAll('tr').forEach((row) => {
    const selectedService = row.querySelector('.billing-service')?.value || '';
    populateBillingServiceOptions(row, selectedService);
    if (selectedService) {
      applyCatalogServiceToBillingRow(row);
    } else {
      updateBillingTotals();
    }
  });
}

function createBillingRow() {
  const row = document.createElement('tr');
  const categories = getServiceCategoryDefinitions();
  const categoryOptions = categories
    .map((cat) => `<option value="${cat.value}">${cat.label}</option>`)
    .join('');
  row.innerHTML = `
    <td>
      <select class="billing-category">
        <option value="">${t('billing.categoryPlaceholder')}</option>
        ${categoryOptions}
      </select>
    </td>
    <td>
      <select class="billing-service" disabled>
        <option value="">${t('billing.servicePlaceholder')}</option>
      </select>
    </td>
    <td><input class="billing-code" type="text" placeholder="${t('billing.codePlaceholder')}" readonly /></td>
    <td><input class="billing-inam" type="text" placeholder="${t('billing.inamPlaceholder')}" readonly /></td>
    <td><input class="billing-qty" type="number" min="1" value="1" /></td>
    <td><input class="billing-price" type="number" min="0" step="1" value="0" readonly /></td>
    <td><input class="billing-base" type="number" min="0" step="1" value="0" /></td>
    <td class="billing-rate">--</td>
    <td class="billing-total">0 CFL</td>
    <td class="billing-provider">-</td>
    <td class="billing-insurance">0 CFL</td>
    <td><input class="billing-actual" type="number" min="0" step="1" readonly /></td>
  `;
  row.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('input', updateBillingTotals);
  });
  row.querySelector('.billing-category')?.addEventListener('change', () => {
    populateBillingServiceOptions(row);
    applyCatalogServiceToBillingRow(row);
  });
  row.querySelector('.billing-service')?.addEventListener('change', () => {
    applyCatalogServiceToBillingRow(row);
  });
  const baseInput = row.querySelector('.billing-base');
  if (baseInput) {
    baseInput.addEventListener('input', () => {
      baseInput.dataset.manual = baseInput.value ? 'true' : '';
      updateBillingTotals();
    });
  }
  return row;
}

function refreshBillingRowsLanguage() {
  if (!billingTableBody) return;
  const categories = getServiceCategoryDefinitions();
  billingTableBody.querySelectorAll('tr').forEach((row) => {
    const categorySelect = row.querySelector('.billing-category');
    if (categorySelect) {
      const currentValue = categorySelect.value;
      categorySelect.innerHTML = `
        <option value="">${t('billing.categoryPlaceholder')}</option>
        ${categories.map((cat) => `<option value="${cat.value}">${cat.label}</option>`).join('')}
      `;
      categorySelect.value = currentValue || '';
    }
    const serviceSelect = row.querySelector('.billing-service');
    if (serviceSelect) {
      const currentServiceId = serviceSelect.value;
      populateBillingServiceOptions(row, currentServiceId);
      const placeholder = serviceSelect.querySelector('option[value=""]');
      if (placeholder) placeholder.textContent = t('billing.servicePlaceholder');
      serviceSelect.value = currentServiceId || '';
      if (currentServiceId) {
        applyCatalogServiceToBillingRow(row);
      }
    }
    const codeInput = row.querySelector('.billing-code');
    if (codeInput) {
      codeInput.setAttribute('placeholder', t('billing.codePlaceholder'));
    }
    const inamInput = row.querySelector('.billing-inam');
    if (inamInput) {
      inamInput.setAttribute('placeholder', t('billing.inamPlaceholder'));
    }
  });
  updateBillingTotals();
}

function refreshAppointmentServiceOptions() {
  if (!appointmentService) return;
  const currentValue = appointmentService.value;
  appointmentService.innerHTML = `<option value="">${t('select.placeholder')}</option>`;
  getServiceCategoryDefinitions().forEach((category) => {
    const option = document.createElement('option');
    option.value = category.value;
    option.textContent = category.label;
    appointmentService.appendChild(option);
  });
  appointmentService.value = currentValue || '';
}

function addServiceToBilling(service) {
  if (!billingTableBody) return;
  const row = createBillingRow();
  const categorySelect = row.querySelector('.billing-category');
  const normalizedCategory = normalizeServiceCategory(service.category);
  if (categorySelect) categorySelect.value = normalizedCategory;
  const serviceRecord = findCatalogService(service.category, service.label, service.code);
  populateBillingServiceOptions(row, serviceRecord?.id || '');
  const serviceSelect = row.querySelector('.billing-service');
  if (serviceSelect && serviceRecord) {
    serviceSelect.value = serviceRecord.id;
  }
  const qtyInput = row.querySelector('.billing-qty');
  if (qtyInput) qtyInput.value = service.qty || 1;
  billingTableBody.appendChild(row);
  if (serviceRecord) {
    applyCatalogServiceToBillingRow(row);
  } else {
    const codeInput = row.querySelector('.billing-code');
    if (codeInput) codeInput.value = service.code || '';
    const inamInput = row.querySelector('.billing-inam');
    if (inamInput) inamInput.value = service.inam || '';
    const priceInput = row.querySelector('.billing-price');
    if (priceInput) priceInput.value = service.price || 0;
    const baseInput = row.querySelector('.billing-base');
    if (baseInput && service.base !== undefined && service.base !== null && service.base !== '') {
      baseInput.value = service.base;
      baseInput.dataset.manual = 'catalog';
    }
    updateBillingTotals();
  }
}

function collectSelectedServices() {
  if (serviceSelectionTableBody) {
    const dynamicRows = Array.from(
      serviceSelectionTableBody.querySelectorAll('input.service-pick:checked')
    );
    if (dynamicRows.length) {
      const catalog = loadServiceCatalog();
      return dynamicRows
        .map((input) => {
          const service = catalog.find((item) => item.id === input.dataset.serviceId);
          const row = input.closest('tr');
          const qty = parseNumber(row?.querySelector('.service-pick-qty')?.value) || 1;
          if (!service) return null;
          return {
            label: service.name,
            category: normalizeServiceCategory(service.category),
            code: service.code || service.diseaseCode || '',
            inam: service.inamCode || '',
            price: parseNumber(service.uninsuredPrice),
            qty,
          };
        })
        .filter(Boolean);
    }
  }
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
  if (serviceSelectionTableBody) {
    serviceSelectionTableBody.querySelectorAll('input.service-pick').forEach((input) => {
      input.checked = false;
    });
    serviceSelectionTableBody.querySelectorAll('.service-pick-qty').forEach((input) => {
      input.value = '1';
    });
  }
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

function renderServiceSelectionTable() {
  if (!serviceSelectionTableBody) return;
  const catalog = loadServiceCatalog();
  const provider = patientInsuranceStatus?.value === 'yes' ? normalizeProvider(insuranceProvider?.value) : '';
  const rawCategoryFilter = serviceSelectionCategoryFilter?.value || '';
  const categoryFilter = rawCategoryFilter ? normalizeServiceCategory(rawCategoryFilter) : '';
  const search = normalizeLabel(serviceSelectionSearch?.value || '');
  const filtered = catalog
    .filter((item) => {
      const serviceCategory = normalizeServiceCategory(item.category);
      if (categoryFilter && serviceCategory !== categoryFilter) return false;
      if (!search) return true;
      return [item.name, item.code, item.inamCode]
        .map((value) => normalizeLabel(value || ''))
        .some((value) => value.includes(search));
    })
    .sort((a, b) => {
      const byCategory = getServiceCategoryLabel(a.category).localeCompare(getServiceCategoryLabel(b.category));
      if (byCategory !== 0) return byCategory;
      return (a.name || '').localeCompare(b.name || '');
    });
  serviceSelectionTableBody.innerHTML = '';
  if (!filtered.length) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="9">${t('dashboard.noData')}</td>`;
    serviceSelectionTableBody.appendChild(row);
    return;
  }
  filtered.forEach((service) => {
    const pricing = resolveServicePricing(
      {
        category: service.category,
        label: service.name,
        code: service.code || service.diseaseCode || '',
        inam: service.inamCode || '',
        price: service.uninsuredPrice || 0,
      },
      provider
    );
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input class="service-pick" type="checkbox" data-service-id="${service.id}" /></td>
      <td>${getServiceCategoryLabel(service.category)}</td>
      <td>${service.name || '-'}</td>
      <td>${service.code || service.diseaseCode || '-'}</td>
      <td>${service.inamCode || '-'}</td>
      <td>${formatCfl(service.uninsuredPrice || 0)}</td>
      <td>${formatCfl(pricing.price || 0)}</td>
      <td>${pricing.base ? formatCfl(pricing.base) : '-'}</td>
      <td><input class="service-pick-qty" type="number" min="1" value="1" /></td>
    `;
    serviceSelectionTableBody.appendChild(row);
  });
}

function renderServiceSelectionOptions() {
  const catalog = loadServiceCatalog();
  renderServiceSelectionTable();
  serviceSelects.forEach((select) => {
    const selectedValues = new Set(Array.from(select.selectedOptions).map((option) => option.value));
    const category = normalizeServiceCategory(select.dataset.serviceCategory || 'consultation');
    const services = catalog.filter((item) => normalizeServiceCategory(item.category) === category);
    select.innerHTML = '';
    if (!services.length) {
      const option = document.createElement('option');
      option.disabled = true;
      option.textContent = t('dashboard.noData');
      select.appendChild(option);
      return;
    }
    services.forEach((service) => {
      const option = document.createElement('option');
      option.value = service.name;
      option.dataset.code = service.code || service.diseaseCode || '';
      option.dataset.inam = service.inamCode || '';
      option.dataset.price = String(service.uninsuredPrice || 0);
      option.textContent = service.name;
      option.selected = selectedValues.has(option.value);
      select.appendChild(option);
    });
  });
}


if (clinicalPatientSearch) {
  clinicalPatientSearch.addEventListener('input', () => {
    if (!clinicalPatientSearch.value.trim()) {
      activeClinicalPatientId = null;
    }
    renderClinicalRecord();
  });
}

if (clinicalPatientResults) {
  clinicalPatientResults.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-patient-id]');
    if (!button) return;
    activeClinicalPatientId = button.getAttribute('data-patient-id');
    renderClinicalRecord();
  });
}

if (saveClinicalHistoryBtn) {
  saveClinicalHistoryBtn.addEventListener('click', () => {
    if (!activeClinicalPatientId) {
      setMessage(clinicalHistoryMessage, t('records.selectPatientHint'));
      return;
    }
    const patients = loadPatients();
    const patient = patients.find((entry) => entry.id === activeClinicalPatientId);
    if (!patient) return;
    patient.clinicalHistory = {
      antecedents: clinicalAntecedents?.value?.trim() || '',
      notes: clinicalNotes?.value?.trim() || '',
      updatedBy: currentEmployee?.name || currentEmployee?.code || '',
      updatedAt: new Date().toISOString(),
    };
    patient.updatedAt = new Date().toISOString();
    savePatients(patients);
    setMessage(clinicalHistoryMessage, t('records.historySaved'));
    refreshClinicalRecordsIfVisible();
    refreshLabModuleIfVisible();
  });
}

if (clinicalExamRequestSelect) {
  clinicalExamRequestSelect.addEventListener('change', () => {
    const record = activeClinicalPatientId ? collectClinicalRecord(activeClinicalPatientId) : null;
    populateClinicalExamRequestOptions(record);
  });
}

if (saveClinicalExamResultBtn) {
  saveClinicalExamResultBtn.addEventListener('click', () => {
    const requestId = clinicalExamRequestSelect?.value || '';
    if (!requestId || !activeClinicalPatientId) {
      setMessage(clinicalExamMessage, t('records.selectRequest'));
      return;
    }
    const request = getClinicalExamRequests(currentEmployee?.role, activeClinicalPatientId).find((entry) => entry.id === requestId);
    const saved = saveClinicalResultForRequest(request, {
      status: clinicalExamStatus?.value || 'pending',
      resultText: clinicalExamResult?.value?.trim() || '',
      comment: clinicalExamComment?.value?.trim() || '',
    });
    if (!saved.ok) {
      setMessage(clinicalExamMessage, saved.reason === 'locked' ? t('records.unpaid') : t('records.selectRequest'));
      return;
    }
    setMessage(clinicalExamMessage, t('records.resultSaved'));
  });
}

if (labRequestSearch) {
  labRequestSearch.addEventListener('input', () => {
    activeLabRequestId = '';
    renderLabModule();
  });
}

if (labStatusFilter) {
  labStatusFilter.addEventListener('change', () => {
    activeLabRequestId = '';
    renderLabModule();
  });
}

if (labRequestsTableBody) {
  labRequestsTableBody.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-lab-request-id]');
    if (!button) return;
    activeLabRequestId = button.getAttribute('data-lab-request-id') || '';
    if (labResultMessage) {
      labResultMessage.textContent = '';
      delete labResultMessage.dataset.persist;
    }
    renderLabModule();
  });
}

if (openLabPatientRecordBtn) {
  openLabPatientRecordBtn.addEventListener('click', () => {
    const request = getClinicalRequestById(activeLabRequestId, getLabModuleRoleFilter());
    if (!request?.patientId) return;
    if (clinicalPatientSearch) clinicalPatientSearch.value = '';
    activeClinicalPatientId = request.patientId;
    showView('records');
  });
}

function saveLabModuleResult(forceValidated = false) {
  const request = getClinicalRequestById(activeLabRequestId, getLabModuleRoleFilter());
  if (!request) {
    setMessage(labResultMessage, t('labModule.noRequestSelected'));
    return;
  }
  if (!canEditLabResults()) {
    setMessage(labResultMessage, t('labModule.readOnly'));
    return;
  }
  const resultText = labResultText?.value?.trim() || '';
  const comment = labResultComment?.value?.trim() || '';
  const nextStatus = forceValidated ? 'validated' : (labResultStatus?.value || 'pending');
  if (forceValidated && !resultText) {
    setMessage(labResultMessage, t('labModule.resultRequired'));
    return;
  }
  const normalizedSupplies = pendingLabSupplies.map((item) => ({
    stockId: item.stockId,
    name: item.name,
    label: item.name,
    qty: parseNumber(item.qty),
    category: 'lab',
  })).filter((item) => item.stockId && item.qty > 0);
  const shouldDeductStock = nextStatus === 'validated' && !request.stockAppliedAt && normalizedSupplies.length > 0;
  const stockAppliedAt = shouldDeductStock ? new Date().toISOString() : (request.stockAppliedAt || '');
  const saved = saveClinicalResultForRequest(request, {
    status: nextStatus,
    resultText,
    comment,
    supplies: normalizedSupplies.map((item) => ({ stockId: item.stockId, name: item.name, qty: item.qty })),
    stockAppliedAt,
  });
  if (!saved.ok) {
    setMessage(labResultMessage, saved.reason === 'locked' ? t('labModule.lockedRequest') : t('labModule.noRequestSelected'));
    return;
  }
  if (shouldDeductStock) {
    applyStockDeductions(normalizedSupplies, {
      sourceRole: getLabModuleRoleFilter(),
      recordedBy: currentEmployee?.name || currentEmployee?.code || '',
      patientId: request.patientId,
      encounterId: request.encounterId,
      createdAt: stockAppliedAt,
    });
  }
  if (labResultMessage) {
    labResultMessage.dataset.persist = '1';
  }
  setMessage(labResultMessage, forceValidated ? t('labModule.resultValidated') : t('records.resultSaved'));
  activeLabRequestId = saved.payload ? `${saved.payload.encounterId}::${saved.payload.serviceId}` : activeLabRequestId;
  renderLabModule();
}

if (addLabSupplyBtn) {
  addLabSupplyBtn.addEventListener('click', () => {
    const stockId = labStockItem?.value || '';
    const qty = parseNumber(labStockQty?.value) || 0;
    if (!stockId || qty <= 0) {
      setMessage(labResultMessage, t('labModule.stockUsageRequired'));
      return;
    }
    const stockItem = loadStock().find((item) => item.id === stockId);
    if (!stockItem) return;
    const existing = pendingLabSupplies.find((item) => item.stockId === stockId);
    if (existing) {
      existing.qty += qty;
    } else {
      pendingLabSupplies.push({ stockId, name: stockItem.name, qty });
    }
    if (labStockQty) labStockQty.value = '1';
    setMessage(labResultMessage, '');
    renderLabSupplyList();
  });
}

if (labSupplyList) {
  labSupplyList.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-stock-id]');
    if (!button) return;
    const stockId = button.getAttribute('data-stock-id');
    pendingLabSupplies = pendingLabSupplies.filter((item) => item.stockId !== stockId);
    renderLabSupplyList();
  });
}

if (saveLabResultBtn) {
  saveLabResultBtn.addEventListener('click', () => saveLabModuleResult(false));
}

if (validateLabResultBtn) {
  validateLabResultBtn.addEventListener('click', () => saveLabModuleResult(true));
}

if (clinicalDoctorTable) {
  clinicalDoctorTable.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-encounter-edit]');
    if (!button) return;
    pendingDashboardEncounterId = button.getAttribute('data-encounter-edit') || '';
    showView('dashboard');
  });
}

if (addBillingRow && billingTableBody) {
  addBillingRow.addEventListener('click', () => {
    billingTableBody.appendChild(createBillingRow());
    applyTranslations();
    updateBillingTotals();
  });
}

if (removeLastBillingRow && billingTableBody) {
  removeLastBillingRow.addEventListener('click', () => {
    const rows = billingTableBody.querySelectorAll('tr');
    if (rows.length <= 1) return;
    rows[rows.length - 1].remove();
    updateBillingTotals();
  });
}

if (coverageRate) {
  coverageRate.addEventListener('change', () => {
    updateBillingTotals();
  });
}

if (insuranceProvider) {
  insuranceProvider.addEventListener('change', () => {
    refreshBillingRowsFromCatalog();
    renderServiceSelectionTable();
  });
}

if (serviceSelectionCategoryFilter) {
  serviceSelectionCategoryFilter.addEventListener('change', renderServiceSelectionTable);
}

if (serviceSelectionSearch) {
  serviceSelectionSearch.addEventListener('input', renderServiceSelectionTable);
}

if (provideServicesBtn) {
  provideServicesBtn.addEventListener('click', () => {
    if (!activePatientId) {
      setMessage(patientMessage, t('billing.savePatientFirst'));
      return;
    }
    setMessage(serviceSelectionMessage, '');
    showView('services');
  });
}

if (backToBillingFromServices) {
  backToBillingFromServices.addEventListener('click', () => showView('billing'));
}

if (addSelectedServices) {
  addSelectedServices.addEventListener('click', () => {
    if (!activePatientId) {
      setMessage(serviceSelectionMessage, t('billing.savePatientFirst'));
      return;
    }
    const selected = collectSelectedServices();
    if (!selected.length) {
      setMessage(serviceSelectionMessage, t('services.empty'));
      return;
    }
    const provider = patientInsuranceStatus?.value === 'yes' ? normalizeProvider(insuranceProvider?.value) : '';
    selected.forEach((service) => {
      const pricing = resolveServicePricing(service, provider);
      addServiceToBilling({
        ...service,
        category: normalizeServiceCategory(service.category),
        price: pricing.price,
        base: pricing.base,
        code: pricing.code || service.code,
        inam: pricing.inamCode || service.inam,
      });
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
        if (['admin', 'director'].includes(currentEmployee?.role)) {
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
      } else if (target === 'records') {
        showView('records');
      } else if (target === 'lab') {
        showView('lab');
      } else if (target === 'hr') {
        showView('hr');
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
    if (['admin', 'director'].includes(currentEmployee?.role)) {
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

if (backToModulesFromRecords) {
  backToModulesFromRecords.addEventListener('click', () => showView('modules'));
}

if (backToModulesFromLab) {
  backToModulesFromLab.addEventListener('click', () => showView('modules'));
}

if (backToModulesFromHr) {
  backToModulesFromHr.addEventListener('click', () => showView('modules'));
}

if (goToModules) {
  goToModules.addEventListener('click', () => showView('modules'));
}

if (backToModulesFromDashboard) {
  backToModulesFromDashboard.addEventListener('click', () => showView('modules'));
}

if (dashboardTrendMetric) {
  dashboardTrendMetric.addEventListener('change', refreshDashboardIfVisible);
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
      role: 'admin',
      roleLabel: t('staff.roleAdmin'),
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
    const firstName = staffFirstName?.value?.trim();
    const lastName = staffLastName?.value?.trim();
    const name = [firstName, lastName].filter(Boolean).join(' ').trim();
    const role = staffRole?.value;
    const email = staffEmail?.value?.trim();
    const phoneCountryCode = staffPhoneCountry?.value || '+228';
    const phoneLocal = staffPhone?.value?.trim();
    const phone = joinPhone(phoneCountryCode, phoneLocal);
    const code = staffCode?.value?.trim();
    const tempPassword = staffTempPassword?.value?.trim();
    const employmentType = staffEmploymentType?.value || 'permanent';
    const locumRate = employmentType === 'locum' ? parseNumber(staffLocumRate?.value) : 100;
    const position = staffPosition?.value?.trim();
    const staffStatusValue = staffStatus?.value || 'active';
    const payMode = employmentType === 'locum' ? 'service_percentage' : 'contract_salary';
    const contractualSalary = employmentType === 'locum' ? 0 : parseNumber(staffContractSalary?.value);
    const employeeSocialRate = employmentType === 'locum' ? 0 : parseNumber(staffEmployeeSocialRate?.value);
    const employerSocialRate = employmentType === 'locum' ? 0 : parseNumber(staffEmployerSocialRate?.value);
    const otherDeductions = parseNumber(staffOtherDeductions?.value);
    const socialId = staffSocialId?.value?.trim() || '';
    const notes = staffNotes?.value?.trim() || '';
    if (!firstName || !lastName || !role || !code || !tempPassword || !staffDob?.value || !staffSex?.value || !staffContractStart?.value || !position) {
      setMessage(staffMessage, t('staff.messages.staffRequired'));
      return;
    }
    if (employmentType === 'locum' && (!Number.isFinite(locumRate) || locumRate <= 0)) {
      setMessage(staffMessage, t('staff.messages.locumRateRequired'));
      return;
    }
    if (employmentType !== 'locum' && contractualSalary <= 0) {
      setMessage(staffMessage, t('staff.messages.salaryRequired'));
      return;
    }
    const roleLabel = staffRole.options[staffRole.selectedIndex]?.textContent || role;
    const payType = role === 'doctor' ? employmentType : null;
    const payRate = employmentType === 'locum' ? locumRate : 0;
    const doctorProfile =
      role === 'doctor'
        ? {
            sex: doctorSex?.value || '',
            age: doctorAge?.value || calculateAgeFromDob(staffDob?.value || '') || '',
            registration: doctorReg?.value?.trim() || '',
            taxId: doctorTax?.value?.trim() || '',
            specialty: doctorSpecialty?.value?.trim() || '',
            serviceFee: parseNumber(doctorFee?.value),
            otrRate: parseNumber(doctorOtr?.value),
          }
        : null;
    const employees = loadEmployees();
    employees.push({
      id: `EMP-${Date.now()}`,
      name,
      role,
      roleLabel,
      firstName,
      lastName,
      dob: staffDob?.value || '',
      sex: staffSex?.value || '',
      contractStart: staffContractStart?.value || '',
      position,
      staffStatus: staffStatusValue,
      payMode,
      contractualSalary,
      employeeSocialRate,
      employerSocialRate,
      otherDeductions,
      socialId,
      notes,
      email,
      phone,
      phoneCountryCode,
      phoneLocal,
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
    if (staffStatus) staffStatus.value = 'active';
    if (staffPhoneCountry) staffPhoneCountry.value = '+228';
    setMessage(staffMessage, t('staff.messages.created'));
    renderStaffList();
    refreshHrPayrollIfVisible();
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
    staffLocumRate.value = '100';
  }
  if (staffPayMode) {
    staffPayMode.value = isLocum ? 'service_percentage' : 'contract_salary';
    staffPayMode.disabled = true;
  }
  if (staffContractSalary) {
    staffContractSalary.disabled = isLocum;
    if (isLocum) staffContractSalary.value = '';
  }
  if (staffEmployeeSocialRate) {
    staffEmployeeSocialRate.disabled = isLocum;
    if (isLocum) staffEmployeeSocialRate.value = '0';
  }
  if (staffEmployerSocialRate) {
    staffEmployerSocialRate.disabled = isLocum;
    if (isLocum) staffEmployerSocialRate.value = '0';
  }
}

if (staffEmploymentType) {
  staffEmploymentType.addEventListener('change', () => {
    syncLocumRateField();
  });
}

syncLocumRateField();
if (hrPayrollPeriod) {
  hrPayrollPeriod.value = getDefaultPayrollPeriod();
  hrPayrollPeriod.addEventListener('change', () => {
    setMessage(hrPayrollMessage, '');
    renderHrPayrollModule();
  });
}
if (hrPayrollFilter) {
  hrPayrollFilter.addEventListener('change', () => {
    setMessage(hrPayrollMessage, '');
    renderHrPayrollModule();
  });
}
if (hrPayrollTableBody) {
  hrPayrollTableBody.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-payroll-employee]');
    if (!button) return;
    activePayrollEmployeeId = button.getAttribute('data-payroll-employee') || '';
    setMessage(hrPayrollMessage, '');
    renderHrPayrollModule();
  });
}
if (recordPayrollPaymentBtn) {
  recordPayrollPaymentBtn.addEventListener('click', () => {
    const employee = loadEmployees().find((entry) => getEmployeeIdentity(entry) === activePayrollEmployeeId);
    if (!employee) {
      setMessage(hrPayrollMessage, t('hrPayroll.noEmployeeSelected'));
      return;
    }
    const period = normalizePayrollPeriod(hrPayrollPeriod?.value || getDefaultPayrollPeriod());
    const payroll = calculateEmployeePayroll(employee, period);
    const amount = parseNumber(hrPaymentAmount?.value);
    if (!amount || amount <= 0 || amount > payroll.balance) {
      setMessage(hrPayrollMessage, t('hrPayroll.invalidPaymentAmount'));
      return;
    }
    const payments = loadPayrollPayments();
    payments.push({
      id: `PAY-${Date.now()}`,
      employeeId: getEmployeeIdentity(employee),
      employeeName: employee.name || '',
      period,
      method: hrPaymentMethod?.value || 'cash',
      amount,
      note: hrPaymentNote?.value?.trim() || '',
      createdAt: new Date().toISOString(),
      gross: payroll.gross,
      netDue: payroll.netDue,
      employerSocial: payroll.employerSocial,
      employeeSocial: payroll.employeeSocial,
      deductions: payroll.deductions,
    });
    savePayrollPayments(payments);
    if (hrPaymentNote) hrPaymentNote.value = '';
    setMessage(hrPayrollMessage, t('hrPayroll.paymentSaved'));
    renderHrPayrollModule();
    refreshDashboardIfVisible();
  });
}
if (downloadPayrollStatementBtn) {
  downloadPayrollStatementBtn.addEventListener('click', () => {
    const employee = loadEmployees().find((entry) => getEmployeeIdentity(entry) === activePayrollEmployeeId);
    if (!employee) {
      setMessage(hrPayrollMessage, t('hrPayroll.noEmployeeSelected'));
      return;
    }
    downloadPayrollStatementFile(employee, normalizePayrollPeriod(hrPayrollPeriod?.value || getDefaultPayrollPeriod()));
  });
}
populateCountryCodeSelect(staffPhoneCountry);
populateCountryCodeSelect(patientPhoneCountry);
populateCountryCodeSelect(patientWhatsappCountry);
populateInsuranceProviderOptions();
populateServiceCategoryOptions();
pendingServiceInsurance = buildInsurancePricingDraft();
renderServiceInsuranceTable();
toggleInsuranceDetails();
if (patientStatusLabel) {
  patientStatusLabel.value = t('billing.newPatient');
}

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

if (nurseEncounterSelect) {
  nurseEncounterSelect.addEventListener('change', () => {
    const encounter = getEncounterById(nurseEncounterSelect.value);
    const nurse = encounter?.nurseAssessment;
    if (nurseHospitalizationMode) nurseHospitalizationMode.value = nurse?.mode || 'outpatient';
    if (nurseTemperature) nurseTemperature.value = nurse?.temperature || '';
    if (nurseBpRight) nurseBpRight.value = nurse?.bpRight || '';
    if (nurseBpLeft) nurseBpLeft.value = nurse?.bpLeft || '';
    if (nurseWeight) nurseWeight.value = nurse?.weight || '';
    if (nurseHeight) nurseHeight.value = nurse?.height || '';
    if (nurseWaist) nurseWaist.value = nurse?.waist || '';
    if (nursePulse) nursePulse.value = nurse?.pulse || '';
    if (nurseRoomNumber) nurseRoomNumber.value = nurse?.roomNumber || '';
    if (nurseBedNumber) nurseBedNumber.value = nurse?.bedNumber || '';
    if (nurseCareNotes) nurseCareNotes.value = nurse?.careNotes || '';
    pendingNurseSupplies = nurse?.supplies || [];
    if (nurseStockQty) nurseStockQty.value = '1';
    renderNurseSupplyList();
  });
}

if (addNurseSupplyBtn) {
  addNurseSupplyBtn.addEventListener('click', () => {
    const stockId = nurseStockItem?.value || '';
    const qty = parseNumber(nurseStockQty?.value) || 0;
    if (!stockId || qty <= 0) {
      setMessage(nurseAssessmentMessage, t('dashboard.medicationRequired'));
      return;
    }
    const stockItem = loadStock().find((item) => item.id === stockId);
    if (!stockItem) return;
    const existing = pendingNurseSupplies.find((item) => item.stockId === stockId);
    if (existing) {
      existing.qty += qty;
    } else {
      pendingNurseSupplies.push({ stockId, name: stockItem.name, qty });
    }
    if (nurseStockQty) nurseStockQty.value = '1';
    setMessage(nurseAssessmentMessage, '');
    renderNurseSupplyList();
  });
}

if (nurseSupplyList) {
  nurseSupplyList.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-stock-id]');
    if (!button) return;
    const stockId = button.getAttribute('data-stock-id');
    pendingNurseSupplies = pendingNurseSupplies.filter((item) => item.stockId !== stockId);
    renderNurseSupplyList();
  });
}

if (saveNurseAssessmentBtn) {
  saveNurseAssessmentBtn.addEventListener('click', () => {
    const encounterId = nurseEncounterSelect?.value || '';
    if (!encounterId) {
      setMessage(nurseAssessmentMessage, t('dashboard.selectEncounterRequired'));
      return;
    }
    const encounters = loadEncounters();
    const encounter = encounters.find((item) => item.id === encounterId);
    if (!encounter) return;
    encounter.nurseAssessment = {
      mode: nurseHospitalizationMode?.value || 'outpatient',
      temperature: nurseTemperature?.value || '',
      bpRight: nurseBpRight?.value || '',
      bpLeft: nurseBpLeft?.value || '',
      weight: nurseWeight?.value || '',
      height: nurseHeight?.value || '',
      waist: nurseWaist?.value || '',
      pulse: nursePulse?.value || '',
      roomNumber: nurseRoomNumber?.value || '',
      bedNumber: nurseBedNumber?.value || '',
      careNotes: nurseCareNotes?.value || '',
      supplies: pendingNurseSupplies,
      recordedBy: currentEmployee?.name || currentEmployee?.code || '',
      recordedAt: new Date().toISOString(),
    };
    encounter.status = 'nurse-completed';
    saveEncounters(encounters);
    applyStockDeductions(
      pendingNurseSupplies.map((item) => ({
        label: item.name,
        qty: item.qty,
        category: 'pharmacy',
        patientId: encounter.patientId,
        encounterId: encounter.id,
      })),
      {
        sourceRole: 'nurse',
        recordedBy: currentEmployee?.name || currentEmployee?.code || '',
        patientId: encounter.patientId,
        encounterId: encounter.id,
      }
    );
    syncFacilityInterconnections(true);
    setMessage(nurseAssessmentMessage, t('dashboard.nurseSaved'));
    refreshDashboardIfVisible();
    refreshClinicalRecordsIfVisible();
    refreshAppointmentsIfVisible();
  });
}

if (doctorEncounterSelect) {
  doctorEncounterSelect.addEventListener('change', () => {
    const encounter = getEncounterById(doctorEncounterSelect.value);
    setDoctorEncounterSummary(encounter);
    const consult = encounter?.doctorConsultation;
    if (doctorPrescriptionType) doctorPrescriptionType.value = consult?.prescriptionType || '';
    if (doctorComplaint) doctorComplaint.value = consult?.complaint || '';
    if (doctorSymptoms) doctorSymptoms.value = consult?.symptoms || '';
    if (doctorExamSummary) doctorExamSummary.value = consult?.examSummary || '';
    if (doctorDiagnosis1) doctorDiagnosis1.value = consult?.diagnoses?.[0] || '';
    if (doctorDiagnosis2) doctorDiagnosis2.value = consult?.diagnoses?.[1] || '';
    if (doctorDiagnosis3) doctorDiagnosis3.value = consult?.diagnoses?.[2] || '';
    if (doctorTests) {
      const testIds = new Set(consult?.tests || []);
      Array.from(doctorTests.options).forEach((option) => {
        option.selected = testIds.has(option.value);
      });
    }
    pendingDoctorMedication = consult?.medications || [];
    renderDoctorMedicationList();
  });
}

if (addDoctorMedicationBtn) {
  addDoctorMedicationBtn.addEventListener('click', () => {
    const stockId = doctorStockItem?.value || '';
    const qty = parseNumber(doctorStockQty?.value) || 0;
    if (!stockId || qty <= 0) {
      setMessage(doctorConsultationMessage, t('dashboard.medicationRequired'));
      return;
    }
    const stockItem = loadStock().find((item) => item.id === stockId);
    if (!stockItem) return;
    const existing = pendingDoctorMedication.find((item) => item.stockId === stockId);
    if (existing) {
      existing.qty += qty;
    } else {
      pendingDoctorMedication.push({ stockId, name: stockItem.name, qty });
    }
    if (doctorStockQty) doctorStockQty.value = '1';
    setMessage(doctorConsultationMessage, '');
    renderDoctorMedicationList();
  });
}

if (doctorMedicationList) {
  doctorMedicationList.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-stock-id]');
    if (!button) return;
    const stockId = button.getAttribute('data-stock-id');
    pendingDoctorMedication = pendingDoctorMedication.filter((item) => item.stockId !== stockId);
    renderDoctorMedicationList();
  });
}

if (saveDoctorConsultationBtn) {
  saveDoctorConsultationBtn.addEventListener('click', () => {
    const encounterId = doctorEncounterSelect?.value || '';
    if (!encounterId) {
      setMessage(doctorConsultationMessage, t('dashboard.selectEncounterRequired'));
      return;
    }
    const encounters = loadEncounters();
    const encounter = encounters.find((item) => item.id === encounterId);
    if (!encounter) return;
    const diagnoses = [doctorDiagnosis1?.value, doctorDiagnosis2?.value, doctorDiagnosis3?.value]
      .map((value) => value?.trim())
      .filter(Boolean);
    encounter.doctorConsultation = {
      complaint: doctorComplaint?.value?.trim() || '',
      symptoms: doctorSymptoms?.value?.trim() || '',
      examSummary: doctorExamSummary?.value?.trim() || '',
      diagnoses,
      tests: Array.from(doctorTests?.selectedOptions || []).map((option) => option.value),
      prescriptionType: doctorPrescriptionType?.value || '',
      medications: pendingDoctorMedication,
      recordedBy: currentEmployee?.name || currentEmployee?.code || '',
      recordedAt: new Date().toISOString(),
    };
    encounter.status = 'doctor-completed';
    saveEncounters(encounters);
    applyStockDeductions(
      pendingDoctorMedication.map((item) => ({
        label: item.name,
        qty: item.qty,
        category: 'pharmacy',
        patientId: encounter.patientId,
        encounterId: encounter.id,
      })),
      {
        sourceRole: 'doctor',
        recordedBy: currentEmployee?.name || currentEmployee?.code || '',
        patientId: encounter.patientId,
        encounterId: encounter.id,
      }
    );
    syncFacilityInterconnections(true);
    setMessage(doctorConsultationMessage, t('dashboard.doctorSaved'));
    refreshDashboardIfVisible();
    refreshClinicalRecordsIfVisible();
    refreshLabModuleIfVisible();
    refreshAppointmentsIfVisible();
  });
}

function buildPatientRecord() {
  const firstName = patientFirstName?.value?.trim() || '';
  const lastName = patientLastName?.value?.trim() || '';
  const sex = patientSex?.value || '';
  const dob = patientDob?.value || '';
  const age = patientAge?.value || calculateAgeFromDob(dob) || '';
  const phoneCountryCode = patientPhoneCountry?.value || '+228';
  const phoneLocal = patientPhone?.value?.trim() || '';
  const whatsappCountryCode = patientWhatsappCountry?.value || phoneCountryCode;
  const whatsappLocal = patientWhatsapp?.value?.trim() || '';
  const isInsured = patientInsuranceStatus?.value === 'yes';
  return {
    id: activePatientId || `PT-${Date.now()}`,
    firstName,
    lastName,
    name: [firstName, lastName].filter(Boolean).join(' ').trim(),
    sex,
    dob,
    age,
    phoneCountryCode,
    phoneLocal,
    phone: joinPhone(phoneCountryCode, phoneLocal),
    whatsappCountryCode,
    whatsappLocal,
    whatsapp: joinPhone(whatsappCountryCode, whatsappLocal),
    profession: patientProfession?.value || '',
    education: patientEducation?.value || '',
    identifier: patientIdentifier?.value?.trim() || '',
    address: {
      country: patientCountry?.value?.trim() || '',
      city: patientCity?.value?.trim() || '',
      district: patientDistrict?.value?.trim() || '',
      postalCode: patientPostalCode?.value?.trim() || '',
    },
    isInsured,
    insuranceType: isInsured ? insuranceProvider?.value || '' : '',
    insuranceId: isInsured ? insuranceId?.value?.trim() || '' : '',
    coverage: isInsured ? coverageRate?.value || '' : '',
    insuranceExpiry: isInsured ? insuranceExpiry?.value || '' : '',
    doctor: assignDoctor?.value || '',
    admittedBy: currentEmployee?.name || currentEmployee?.code || '',
    createdAt: new Date().toISOString(),
  };
}

if (savePatientBtn) {
  savePatientBtn.addEventListener('click', () => {
    const record = buildPatientRecord();
    if (
      !record.firstName ||
      !record.lastName ||
      !record.sex ||
      !record.dob ||
      !record.phone ||
      !record.address.country ||
      !record.address.city ||
      !record.address.district ||
      !record.profession ||
      !record.education ||
      !record.identifier
    ) {
      setMessage(patientMessage, t('billing.patientRequired'));
      return;
    }
    if (!record.doctor) {
      setMessage(patientMessage, t('billing.providerRequired'));
      return;
    }
    if (
      record.isInsured &&
      (!record.insuranceType || !record.insuranceId || !record.coverage || !record.insuranceExpiry)
    ) {
      setMessage(patientMessage, t('billing.insuranceRequired'));
      return;
    }
    const list = loadPatients();
    const index = list.findIndex((item) => item.id === record.id);
    if (index >= 0) {
      list[index] = {
        ...list[index],
        ...record,
        createdAt: list[index].createdAt || record.createdAt,
        updatedAt: new Date().toISOString(),
      };
    } else {
      list.push(record);
    }
    savePatients(list);
    syncFacilityInterconnections(true);
    activePatientId = record.id;
    maybeLinkAppointmentToCurrentPatient(record, { silent: true });
    if (patientStatusLabel) patientStatusLabel.value = index >= 0 ? t('billing.returningPatient') : t('billing.newPatient');
    setMessage(patientMessage, t('billing.patientSaved'));
    refreshDashboardIfVisible();
    refreshClinicalRecordsIfVisible();
  });
}

if (patientSearch) {
  patientSearch.addEventListener('input', () => {
    const query = patientSearch.value;
    if (!query || query.length < 2) {
      renderPatientSearchResults([]);
      setMessage(patientSearchMessage, '');
      return;
    }
    const matches = searchPatients(query);
    renderPatientSearchResults(matches);
    setMessage(patientSearchMessage, matches.length ? '' : t('billing.patientNotFound'));
  });
}

if (patientSearchResults) {
  patientSearchResults.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-patient-id]');
    if (!button) return;
    const patientId = button.getAttribute('data-patient-id');
    const match = loadPatients().find((patient) => patient.id === patientId);
    if (!match) return;
    fillPatientForm(match);
    if (patientSearch) patientSearch.value = fullPatientName(match);
    renderPatientSearchResults([]);
    setMessage(patientSearchMessage, '');
    setMessage(patientMessage, t('billing.patientLoaded'));
  });
}

if (createNewPatientBtn) {
  createNewPatientBtn.addEventListener('click', () => {
    clearPatientForm();
    activeAppointmentId = '';
    if (patientSearch) patientSearch.value = '';
    renderPatientSearchResults([]);
    setMessage(patientSearchMessage, '');
    setMessage(patientMessage, '');
  });
}

if (patientInsuranceStatus) {
  patientInsuranceStatus.addEventListener('change', () => {
    toggleInsuranceDetails();
    refreshBillingRowsFromCatalog();
    renderServiceSelectionTable();
  });
}

if (patientDob) {
  patientDob.addEventListener('change', () => {
    if (patientAge) patientAge.value = calculateAgeFromDob(patientDob.value);
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
    const linkedPatient = findPatientForAppointment({ patientName, phone });
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
      patientId: linkedPatient?.id || '',
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
    syncFacilityInterconnections(true);
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
      syncFacilityInterconnections(true);
      refreshDashboardIfVisible();
      refreshAppointmentsIfVisible();
    }
  });
  appointmentsTableBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const openButton = target.closest('.appointment-open');
    if (openButton instanceof HTMLElement) {
      const id = openButton.dataset.id;
      if (!id) return;
      openAppointmentInBilling(id);
      return;
    }
    if (!target.classList.contains('remove-row')) return;
    const id = target.dataset.id;
    if (!id) return;
    const appointments = loadAppointments().filter((appt) => appt.id !== id);
    saveAppointments(appointments);
    syncFacilityInterconnections(true);
    renderAppointmentsTable();
    refreshDashboardIfVisible();
  });
}

if (pharmacyQueueTable) {
  pharmacyQueueTable.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-encounter-id]');
    if (!button) return;
    markEncounterPrescriptionDispensed(button.getAttribute('data-encounter-id'));
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
    const type = stockType?.value || 'medication';
    const supplier = stockSupplier?.value?.trim() || '';
    const unitPrice = parseNumber(stockPrice?.value);
    const qty = Math.max(0, parseNumber(stockQty?.value));
    const min = Math.max(0, parseNumber(stockMin?.value));
    const entryDate = stockEntryDate?.value || '';
    const expiryDate = stockExpiryDate?.value || '';
    const receiptName = stockReceipt?.files?.[0]?.name || '';
    const notes = stockNotes?.value?.trim() || '';
    if (!name) {
      setMessage(inventoryMessage, t('inventory.required'));
      return;
    }
    upsertStockReceipt({
      name,
      type,
      supplier,
      unitPrice,
      qty,
      min,
      entryDate,
      expiryDate,
      receiptName,
      notes,
    }, {
      movementType: qty > 0 ? 'manual_entry' : '',
      sourceModule: 'inventory',
      recordedBy: currentEmployee?.name || currentEmployee?.code || '',
      note: notes,
    });
    if (stockName) stockName.value = '';
    if (stockType) stockType.value = 'medication';
    if (stockSupplier) stockSupplier.value = '';
    if (stockPrice) stockPrice.value = '';
    if (stockQty) stockQty.value = '';
    if (stockMin) stockMin.value = '';
    if (stockEntryDate) stockEntryDate.value = '';
    if (stockExpiryDate) stockExpiryDate.value = '';
    if (stockReceipt) stockReceipt.value = '';
    if (stockNotes) stockNotes.value = '';
    setMessage(inventoryMessage, t('inventory.saved'));
    refreshInventoryIfVisible();
    refreshDashboardIfVisible();
  });
}

if (stockTableBody) {
  stockTableBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const row = target.closest('tr');
    const id = row?.dataset.id;
    if (!id) return;
    const stock = loadStock();
    const item = stock.find((entry) => entry.id === id);
    if (!item) return;
    if (target.classList.contains('stock-save')) {
      const previousQty = parseNumber(item.qty);
      const nextQty = Math.max(0, parseNumber(row.querySelector('.stock-qty')?.value));
      item.min = Math.max(0, parseNumber(row.querySelector('.stock-min')?.value));
      item.unitPrice = Math.max(0, parseNumber(row.querySelector('.stock-price')?.value));
      item.qty = nextQty;
      item.updatedAt = new Date().toISOString();
      saveStock(stock);
      if (nextQty !== previousQty) {
        const diff = Math.abs(nextQty - previousQty);
        recordStockMovement({
          stockId: item.id,
          item: item.name,
          itemType: item.type,
          direction: nextQty > previousQty ? 'in' : 'out',
          qty: diff,
          unitCost: item.unitPrice,
          totalCost: diff * parseNumber(item.unitPrice),
          movementType: 'adjustment',
          sourceModule: 'inventory',
          recordedBy: currentEmployee?.name || currentEmployee?.code || '',
          note: 'Manual stock adjustment',
        });
      }
      refreshInventoryIfVisible();
      refreshDashboardIfVisible();
      return;
    }
    if (target.classList.contains('remove-row')) {
      if (parseNumber(item.qty) > 0) {
        recordStockMovement({
          stockId: item.id,
          item: item.name,
          itemType: item.type,
          direction: 'out',
          qty: parseNumber(item.qty),
          unitCost: item.unitPrice,
          totalCost: parseNumber(item.qty) * parseNumber(item.unitPrice),
          movementType: 'adjustment',
          sourceModule: 'inventory',
          recordedBy: currentEmployee?.name || currentEmployee?.code || '',
          note: 'Stock item removed',
        });
      }
      saveStock(stock.filter((entry) => entry.id !== id));
      refreshInventoryIfVisible();
      refreshDashboardIfVisible();
    }
  });
}

if (addPurchaseOrderBtn) {
  addPurchaseOrderBtn.addEventListener('click', () => {
    const supplier = poSupplier?.value?.trim() || '';
    const itemName = poItem?.value?.trim() || '';
    const type = poType?.value || 'medication';
    const qtyOrdered = parseNumber(poQty?.value);
    const unitCost = parseNumber(poUnitCost?.value);
    const expectedDate = poDate?.value || '';
    if (!supplier || !itemName || !qtyOrdered) {
      setMessage(poMessage, t('inventory.poRequired'));
      return;
    }
    const orders = loadPurchaseOrders();
    orders.push({
      id: `PO-${Date.now()}`,
      supplier,
      itemName,
      type,
      qtyOrdered,
      qtyReceived: 0,
      unitCost,
      expectedDate,
      receivedDate: '',
      status: 'open',
      createdAt: new Date().toISOString(),
    });
    savePurchaseOrders(orders);
    if (poSupplier) poSupplier.value = '';
    if (poItem) poItem.value = '';
    if (poType) poType.value = 'medication';
    if (poQty) poQty.value = '';
    if (poUnitCost) poUnitCost.value = '';
    if (poDate) poDate.value = '';
    setMessage(poMessage, t('inventory.poSaved'));
    refreshInventoryIfVisible();
  });
}

if (poTableBody) {
  poTableBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const row = target.closest('tr');
    const id = row?.dataset.id;
    if (!id) return;
    if (target.classList.contains('po-receive')) {
      const receiveQty = Math.max(0, parseNumber(row.querySelector('.po-receive-qty')?.value));
      if (!receiveQty) {
        setMessage(poMessage, t('inventory.receiveRequired'));
        return;
      }
      const orders = loadPurchaseOrders();
      const order = orders.find((entry) => entry.id === id);
      if (!order) return;
      const remaining = Math.max(0, parseNumber(order.qtyOrdered) - parseNumber(order.qtyReceived));
      if (!remaining || receiveQty > remaining) {
        setMessage(poMessage, t('inventory.receiveRequired'));
        return;
      }
      const item = upsertStockReceipt({
        stockId: order.stockItemId || '',
        name: order.itemName,
        type: order.type,
        supplier: order.supplier,
        unitPrice: order.unitCost,
        qty: receiveQty,
        min: 0,
        entryDate: new Date().toISOString().slice(0, 10),
        notes: `Purchase order ${order.id}`,
      }, {
        movementType: 'purchase',
        sourceModule: 'purchase_order',
        recordedBy: currentEmployee?.name || currentEmployee?.code || '',
        note: `Purchase order ${order.id}`,
      });
      order.stockItemId = item.id;
      order.qtyReceived = parseNumber(order.qtyReceived) + receiveQty;
      order.receivedDate = new Date().toISOString().slice(0, 10);
      order.status = order.qtyReceived >= order.qtyOrdered ? 'received' : 'partial';
      savePurchaseOrders(orders);
      setMessage(poMessage, t('inventory.receiveSaved'));
      refreshInventoryIfVisible();
      refreshDashboardIfVisible();
      return;
    }
    if (target.classList.contains('remove-row')) {
      savePurchaseOrders(loadPurchaseOrders().filter((order) => order.id !== id));
      refreshInventoryIfVisible();
    }
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

if (insuranceReportGenerateBtn) {
  insuranceReportGenerateBtn.addEventListener('click', () => {
    const insurer = insuranceReportInsurer?.value || '';
    const start = insuranceReportStart?.value || '';
    const end = insuranceReportEnd?.value || '';
    if (!insurer || !start || !end) {
      setMessage(insuranceReportMessage, t('reports.statementRequired'));
      return;
    }
    const existing = loadInsuranceStatements().find(
      (statement) =>
        normalizeProvider(statement.insurer) === normalizeProvider(insurer) &&
        statement.periodStart === start &&
        statement.periodEnd === end
    );
    const statement = buildInsuranceStatementSnapshot(insurer, start, end, existing || null);
    if (!statement.rows.length) {
      activeInsuranceStatementId = '';
      renderInsuranceStatementsSection();
      renderInsuranceReceivablesSection();
      setMessage(insuranceReportMessage, t('reports.noClaims'));
      return;
    }
    upsertInsuranceStatement(statement);
    activeInsuranceStatementId = statement.id;
    renderReports();
    setMessage(insuranceReportMessage, t('reports.statementGenerated'));
  });
}

if (insuranceReportEmailBtn) {
  insuranceReportEmailBtn.addEventListener('click', () => {
    const statement = getInsuranceStatementById(activeInsuranceStatementId);
    if (!statement) {
      setMessage(insuranceReportMessage, t('reports.noStatementSelected'));
      return;
    }
    const opened = openInsuranceStatementEmailDraft(statement);
    if (opened) {
      setMessage(insuranceReportMessage, t('reports.emailDraftReady'));
    }
  });
}

if (insuranceReportBordereauBtn) {
  insuranceReportBordereauBtn.addEventListener('click', () => {
    const statement = getInsuranceStatementById(activeInsuranceStatementId);
    if (!statement) {
      setMessage(insuranceReportMessage, t('reports.noStatementSelected'));
      return;
    }
    const opened = exportInsuranceStatementBordereau(statement);
    setMessage(insuranceReportMessage, opened ? t('reports.bordereauReady') : t('reports.bordereauPopupBlocked'));
  });
}

if (insuranceReportPdfBtn) {
  insuranceReportPdfBtn.addEventListener('click', () => {
    const statement = getInsuranceStatementById(activeInsuranceStatementId);
    if (!statement) {
      setMessage(insuranceReportMessage, t('reports.noStatementSelected'));
      return;
    }
    const opened = exportInsuranceStatementPdf(statement);
    setMessage(insuranceReportMessage, opened ? t('reports.pdfReady') : t('reports.pdfPopupBlocked'));
  });
}

if (insuranceReportDownloadBtn) {
  insuranceReportDownloadBtn.addEventListener('click', () => {
    const statement = getInsuranceStatementById(activeInsuranceStatementId);
    if (!statement) {
      setMessage(insuranceReportMessage, t('reports.noStatementSelected'));
      return;
    }
    downloadInsuranceStatementExcel(statement);
    setMessage(insuranceReportMessage, t('reports.excelDownloaded'));
  });
}

if (insuranceReportLetterBtn) {
  insuranceReportLetterBtn.addEventListener('click', () => {
    const statement = getInsuranceStatementById(activeInsuranceStatementId);
    if (!statement) {
      setMessage(insuranceReportMessage, t('reports.noStatementSelected'));
      return;
    }
    downloadInsuranceTransmissionLetter(statement);
    setMessage(insuranceReportMessage, t('reports.letterDownloaded'));
  });
}

if (insuranceReportUpdateStatusBtn) {
  insuranceReportUpdateStatusBtn.addEventListener('click', () => {
    const nextStatus = insuranceReportStatusSelect?.value || 'generated';
    const statement = updateInsuranceStatementStatus(activeInsuranceStatementId, nextStatus, 'manual');
    if (!statement) {
      setMessage(insuranceReportMessage, t('reports.noStatementSelected'));
      return;
    }
    renderReports();
    setMessage(insuranceReportMessage, t('reports.statusUpdated'));
  });
}

if (insuranceReportRecordPaymentBtn) {
  insuranceReportRecordPaymentBtn.addEventListener('click', () => {
    const result = recordInsuranceStatementPayment(activeInsuranceStatementId, {
      amount: insuranceReportPaymentAmount?.value || '',
      paymentDate: insuranceReportPaymentDate?.value || '',
      paymentMethod: insuranceReportPaymentMethod?.value || 'bank_transfer',
      reference: insuranceReportPaymentReference?.value || '',
      note: insuranceReportPaymentNote?.value || '',
    });
    if (result?.error === 'missing_statement') {
      setMessage(insuranceReportMessage, t('reports.noStatementSelected'));
      return;
    }
    if (result?.error === 'invalid_amount') {
      setMessage(insuranceReportMessage, t('reports.paymentAmountInvalid'));
      return;
    }
    if (result?.error === 'exceeds_balance') {
      setMessage(insuranceReportMessage, t('reports.paymentExceedsBalance'));
      return;
    }
    if (result?.error === 'missing_payment_date') {
      setMessage(insuranceReportMessage, t('reports.paymentDateRequired'));
      return;
    }
    resetInsuranceStatementPaymentForm();
    renderReports();
    refreshDashboardIfVisible();
    setMessage(insuranceReportMessage, t('reports.paymentRecorded'));
  });
}

if (insuranceReceivablesTableBody) {
  insuranceReceivablesTableBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const openButton = target.closest('.insurance-receivable-open');
    const reminderButton = target.closest('.insurance-receivable-reminder');
    const statementId = openButton?.getAttribute('data-statement-id') || reminderButton?.getAttribute('data-statement-id') || '';
    if (!statementId) return;
    const statement = getInsuranceStatementById(statementId);
    if (!statement) return;
    if (openButton) {
      activeInsuranceStatementId = statement.id;
      if (insuranceReportInsurer) insuranceReportInsurer.value = statement.insurer || '';
      if (insuranceReportStart) insuranceReportStart.value = statement.periodStart || '';
      if (insuranceReportEnd) insuranceReportEnd.value = statement.periodEnd || '';
      renderReports();
      setMessage(insuranceReportMessage, t('reports.statementLoaded'));
      return;
    }
    if (reminderButton) {
      const opened = openInsuranceReminderEmailDraft(statement);
      if (!opened) return;
      recordInsuranceStatementReminder(statement.id, { method: 'email', note: 'Reminder email draft opened.' });
      renderReports();
      refreshDashboardIfVisible();
      setMessage(insuranceReportMessage, t('reports.reminderDraftReady'));
    }
  });
}

if (insuranceReportHistoryBody) {
  insuranceReportHistoryBody.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest('button[data-statement-id]');
    if (!button) return;
    const statement = getInsuranceStatementById(button.getAttribute('data-statement-id'));
    if (!statement) return;
    activeInsuranceStatementId = statement.id;
    if (insuranceReportInsurer) insuranceReportInsurer.value = statement.insurer || '';
    if (insuranceReportStart) insuranceReportStart.value = statement.periodStart || '';
    if (insuranceReportEnd) insuranceReportEnd.value = statement.periodEnd || '';
    renderReports();
    setMessage(insuranceReportMessage, t('reports.statementLoaded'));
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
  const patientRecord = buildPatientRecord();
  if (!patientRecord.firstName || !patientRecord.lastName) {
    setMessage(patientMessage, t('billing.patientRequired'));
    return;
  }
  const name = fullPatientName(patientRecord);
  const { first, last } = splitName(name);
  const coverage = parseNumber(patientRecord.coverage);
  receiptFacility.textContent =
    currentFacilityProfile?.name || currentFacility || 'MediTrack';
  receiptNumber.textContent = generateReceiptNumber();
  receiptCashier.textContent = currentEmployee?.name || currentEmployee?.code || 'Admission';
  receiptDate.textContent = now.toLocaleDateString();
  receiptTime.textContent = formatTime(now);
  receiptClientCode.textContent = patientRecord.identifier || patientRecord.phone || '-';
  receiptLastName.textContent = last || name || '-';
  receiptFirstName.textContent = first || '-';
  receiptAddress.textContent = [
    patientRecord.address?.country,
    patientRecord.address?.city,
    patientRecord.address?.district,
    patientRecord.address?.postalCode,
  ]
    .filter(Boolean)
    .join(', ') || '-';
  receiptInsurer.textContent = patientRecord.insuranceType || '-';
  receiptSex.textContent = patientRecord.sex || '-';
  receiptDob.textContent = formatDate(patientRecord.dob) || '-';
  receiptProfession.textContent = patientRecord.profession || '-';
  receiptPhone.textContent = patientRecord.phone || '-';
  receiptCoverage.textContent = coverage ? `${coverage}%` : '-';
  receiptPolicy.textContent = patientRecord.insuranceId || '-';

  receiptTableBody.innerHTML = '';
  let totalInsurance = 0;
  let totalPatient = 0;
  const items = [];
  billingTableBody.querySelectorAll('tr').forEach((row) => {
    const category = row.querySelector('.billing-category')?.value || '';
    const serviceSelect = row.querySelector('.billing-service');
    const item = serviceSelect?.selectedOptions?.[0]?.textContent || '';
    const code = row.querySelector('.billing-code')?.value || '';
    const inam = row.querySelector('.billing-inam')?.value || '';
    const qty = parseNumber(row.querySelector('.billing-qty')?.value);
    const price = parseNumber(row.querySelector('.billing-price')?.value);
    const baseUnit = parseNumber(row.querySelector('.billing-base')?.value);
    const actualInput = row.querySelector('.billing-actual');
    const providerLabel = row.querySelector('.billing-provider')?.textContent || '';
    const lineTotal = qty * price;
    if (!item && !lineTotal) return;
    const baseTotalRaw = qty * baseUnit;
    const baseTotal = baseTotalRaw > 0 ? Math.min(baseTotalRaw, lineTotal) : lineTotal;
    const insurance = coverage ? baseTotal * (coverage / 100) : 0;
    const actualDefault = Math.max(0, lineTotal - insurance);
    const patient = parseNumber(actualInput?.value) || actualDefault;
    totalInsurance += insurance;
    totalPatient += patient;
    items.push({
      label: item,
      serviceId: serviceSelect?.value || '',
      category,
      categoryLabel: getServiceCategoryLabel(category),
      qty,
      price,
      total: lineTotal,
      base: baseTotal,
      rate: coverage,
      insurance,
      patient,
      code,
      inam,
      insurer: providerLabel,
      providerId: assignDoctor?.value || '',
      providerName: assignDoctor?.selectedOptions?.[0]?.textContent || '',
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
  if (!items.length) {
    setMessage(patientMessage, t('services.empty'));
    receiptPanel.classList.add('hidden');
    if (printReceiptBtn) printReceiptBtn.disabled = true;
    return;
  }
  receiptTotalNet.textContent = formatCfl(totalPatient);
  receiptTotalInsurance.textContent = formatCfl(totalInsurance);
  receiptPanel.classList.remove('hidden');
  if (printReceiptBtn) printReceiptBtn.disabled = false;

  const linkedAppointment = getBillingAppointmentCandidate(patientRecord);
  const receipts = loadReceipts();
  const paymentType = paymentMethod?.value || 'cash';
  const encounterId = `ENC-${Date.now()}`;
  const receiptItems = items.map((item) => ({ ...item, encounterId }));
  const receiptRecord = {
    id: receiptNumber.textContent,
    createdAt: now.toISOString(),
    total: totalInsurance + totalPatient,
    insuranceTotal: totalInsurance,
    patientTotal: totalPatient,
    items: receiptItems,
    doctor: assignDoctor?.value || '',
    doctorName: assignDoctor?.selectedOptions?.[0]?.textContent || '',
    patientId: patientRecord.id,
    patientName: name,
    patientPhone: patientRecord.phone || '',
    insuranceType: patientRecord.insuranceType || '',
    insuranceCoverage: patientRecord.coverage || '',
    insuranceId: patientRecord.insuranceId || '',
    paymentMethod: paymentType,
    admittedBy: currentEmployee?.name || currentEmployee?.code || '',
    encounterId,
    appointmentId: linkedAppointment?.id || activeAppointmentId || '',
  };
  receipts.push({
    ...receiptRecord,
  });
  saveReceipts(receipts);
  const patients = loadPatients();
  const patientIndex = patients.findIndex((item) => item.id === patientRecord.id);
  if (patientIndex >= 0) {
    patients[patientIndex] = {
      ...patients[patientIndex],
      ...patientRecord,
      createdAt: patients[patientIndex].createdAt || patientRecord.createdAt,
      updatedAt: new Date().toISOString(),
    };
  } else {
    patients.push(patientRecord);
  }
  savePatients(patients);
  activePatientId = patientRecord.id;
  const encounters = loadEncounters();
  encounters.push({
    id: encounterId,
    patientId: patientRecord.id,
    patientName: name,
    doctor: assignDoctor?.value || '',
    doctorName: assignDoctor?.selectedOptions?.[0]?.textContent || '',
    receiptId: receiptRecord.id,
    paymentMethod: paymentType,
    services: receiptItems,
    insuranceType: patientRecord.insuranceType || '',
    insuranceCoverage: patientRecord.coverage || '',
    appointmentId: linkedAppointment?.id || activeAppointmentId || '',
    patientPhone: patientRecord.phone || '',
    status: 'registered',
    createdAt: now.toISOString(),
  });
  saveEncounters(encounters);
  const accountingEntries = loadAccountingEntries();
  accountingEntries.push({
    id: `ACC-${Date.now()}`,
    entryType: 'billing',
    receiptId: receiptRecord.id,
    encounterId,
    patientId: patientRecord.id,
    patientName: name,
    admittedBy: currentEmployee?.name || currentEmployee?.code || '',
    insurer: patientRecord.insuranceType || '',
    appointmentId: linkedAppointment?.id || activeAppointmentId || '',
    paymentMethod: paymentType,
    cashAmount: paymentType === 'cash' ? totalPatient : 0,
    bankAmount: paymentType === 'bank_transfer' ? totalPatient : 0,
    insurerAmount: totalInsurance,
    totalAmount: totalInsurance + totalPatient,
    createdAt: now.toISOString(),
  });
  saveAccountingEntries(accountingEntries);
  applyStockDeductions(receiptItems, {
    sourceRole: 'billing',
    recordedBy: currentEmployee?.name || currentEmployee?.code || '',
    patientId: patientRecord.id,
    encounterId,
    createdAt: now.toISOString(),
  });
  syncFacilityInterconnections(true);
  renderReports();
  refreshDashboardIfVisible();
  refreshClinicalRecordsIfVisible();
  refreshLabModuleIfVisible();
  refreshHrPayrollIfVisible();
  refreshAppointmentsIfVisible();
  populateNurseEncounterOptions();
  populateDoctorEncounterOptions();
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
