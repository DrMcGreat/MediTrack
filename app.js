const langSelect = document.getElementById('langSelect');
const welcomeView = document.getElementById('welcomeView');
const modulesView = document.getElementById('modulesView');
const moduleBillingView = document.getElementById('moduleBillingView');
const staffAccessView = document.getElementById('staffAccessView');
const roleDashboardView = document.getElementById('roleDashboardView');
const topBar = document.getElementById('topBar');
const facilityName = document.getElementById('facilityName');

const tabSignIn = document.getElementById('tabSignIn');
const tabSignUp = document.getElementById('tabSignUp');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signInMessage = document.getElementById('signInMessage');
const signUpMessage = document.getElementById('signUpMessage');
const signOutBtn = document.getElementById('signOutBtn');

const signInCode = document.getElementById('signInCode');
const signUpFacility = document.getElementById('signUpFacility');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPhone = document.getElementById('signUpPhone');
const signUpCity = document.getElementById('signUpCity');
const signUpCountry = document.getElementById('signUpCountry');
const signUpCode = document.getElementById('signUpCode');

const moduleButtons = document.querySelectorAll('[data-module]');
const backToModules = document.getElementById('backToModules');
const backToWelcome = document.getElementById('backToWelcome');
const goToModules = document.getElementById('goToModules');
const backToModulesFromDashboard = document.getElementById('backToModulesFromDashboard');
const billingTableBody = document.getElementById('billingTableBody');
const addBillingRow = document.getElementById('addBillingRow');
const coverageRate = document.getElementById('coverageRate');
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
const patientMessage = document.getElementById('patientMessage');
const patientSearch = document.getElementById('patientSearch');

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
const doctorType = document.getElementById('doctorType');
const doctorRate = document.getElementById('doctorRate');

let currentLang = 'en';
let currentFacility = null;
let currentEmployee = null;

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
}

function searchPatients(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  const patients = loadPatients();
  return (
    patients.find((patient) => patient.name?.toLowerCase().includes(q)) ||
    patients.find((patient) => patient.phone?.toLowerCase().includes(q)) ||
    patients.find((patient) => patient.whatsapp?.toLowerCase().includes(q))
  );
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
      facilityCity: 'City',
      facilityCountry: 'Country',
      authCode: 'Authorization code',
      authCodePlaceholder: 'Provided by admin',
      create: 'Create facility account',
    },
    actions: { signOut: 'Sign out' },
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
      open: 'Open module',
      back: 'Back to modules',
      backWelcome: 'Back',
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
      email: 'Email',
      phone: 'Phone',
      employeeCode: 'Employee ID',
      tempPassword: 'Temporary password',
      doctorType: 'Doctor category',
      doctorFull: 'Full time',
      doctorLocum: 'Locum (vacataire)',
      doctorRate: 'Locum rate (%)',
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
      profEmployee: 'Employee (public/private)',
      profSelf: 'Self-employed',
      profCivil: 'Civil servant',
      profStudent: 'Student',
      profRetired: 'Retired',
      profUnemployed: 'Unemployed',
      profHome: 'Homemaker',
      education: 'Education level',
      educationPrimary: 'Primary',
      educationSecondary: 'Secondary',
      educationTertiary: 'University',
      educationOther: 'Other',
      insuranceTitle: 'Insurance & coverage',
      insuranceProvider: 'Insurance provider',
      insuranceId: 'Insurance ID / dossier',
      coverageRate: 'Coverage rate',
      patientId: 'Patient ID / national ID',
      servicesTitle: 'Reason for visit',
      serviceConsult: 'Consultation',
      serviceLab: 'Lab analysis',
      serviceImaging: 'Medical imaging',
      serviceHospital: 'Hospitalization',
      serviceSurgery: 'Surgery',
      serviceOutpatient: 'Outpatient care',
      servicePharmacy: 'Pharmacy',
      consultList: 'Consultation type',
      assignDoctor: 'Assign doctor',
      doctorPlaceholder: 'Select doctor',
      noDoctor: 'No doctors available',
      consultationCost: 'Consultation cost (CFL)',
      addConsultation: 'Add consultation to billing',
      savePatient: 'Save patient profile',
      consultationItem: 'Consultation',
      consultationRequired: 'Enter a consultation cost first.',
      consultAdded: 'Consultation added to billing.',
      patientRequired: 'Full name and sex are required.',
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
      rate: 'Rate',
      total: 'Total',
      insuranceShareShort: 'Insurance',
      patientShareShort: 'Patient',
      addLine: 'Add line',
      summaryTitle: 'Billing summary',
      totalCfl: 'Total (CFL)',
      insuranceShare: 'Insurance share',
      patientShare: 'Patient share',
      notes: 'Billing notes',
      remove: 'Remove',
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
      facilityCity: 'Ville',
      facilityCountry: 'Pays',
      authCode: 'Code d’autorisation',
      authCodePlaceholder: 'Fourni par admin',
      create: 'Créer le compte établissement',
    },
    actions: { signOut: 'Se déconnecter' },
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
      open: 'Ouvrir le module',
      back: 'Retour aux modules',
      backWelcome: 'Retour',
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
      email: 'Email',
      phone: 'Téléphone',
      employeeCode: "ID employé",
      tempPassword: 'Mot de passe temporaire',
      doctorType: 'Catégorie médecin',
      doctorFull: 'Temps plein',
      doctorLocum: 'Vacataire',
      doctorRate: 'Taux vacataire (%)',
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
      profEmployee: 'Salarié (public/privé)',
      profSelf: 'Travailleur indépendant',
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
      insuranceProvider: 'Assureur',
      insuranceId: "Numéro d'assurance / dossier",
      coverageRate: 'Taux de couverture',
      patientId: "Identifiant patient / pièce d'identité",
      servicesTitle: 'Motif de visite',
      serviceConsult: 'Consultation',
      serviceLab: 'Analyse biologique',
      serviceImaging: 'Imagerie médicale',
      serviceHospital: 'Hospitalisation',
      serviceSurgery: 'Chirurgie',
      serviceOutpatient: 'Soins ambulatoires',
      servicePharmacy: 'Pharmacie',
      consultList: 'Type de consultation',
      assignDoctor: 'Assigner un médecin',
      doctorPlaceholder: 'Sélectionner un médecin',
      noDoctor: 'Aucun médecin disponible',
      consultationCost: 'Coût de consultation (CFL)',
      addConsultation: 'Ajouter la consultation à la facture',
      savePatient: 'Enregistrer le patient',
      consultationItem: 'Consultation',
      consultationRequired: 'Veuillez saisir le coût de consultation.',
      consultAdded: 'Consultation ajoutée à la facture.',
      patientRequired: 'Nom complet et sexe obligatoires.',
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
      rate: 'Taux',
      total: 'Total',
      insuranceShareShort: 'Assurance',
      patientShareShort: 'Assuré',
      addLine: 'Ajouter une ligne',
      summaryTitle: 'Résumé de facturation',
      totalCfl: 'Total (CFL)',
      insuranceShare: 'Part assurance',
      patientShare: 'Part assuré',
      notes: 'Notes de facturation',
      remove: 'Retirer',
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
  refreshBillingRowsLanguage();
  applyRoleAccess();
  populateDoctorSelect();
  refreshDashboardIfVisible();
}

function setAuthMode(mode) {
  const isSignIn = mode === 'signin';
  signInForm.classList.toggle('hidden', !isSignIn);
  signUpForm.classList.toggle('hidden', isSignIn);
  tabSignIn.classList.toggle('active', isSignIn);
  tabSignUp.classList.toggle('active', !isSignIn);
}

function showView(view) {
  welcomeView.classList.add('hidden');
  modulesView.classList.add('hidden');
  moduleBillingView.classList.add('hidden');
  staffAccessView.classList.add('hidden');
  roleDashboardView.classList.add('hidden');
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
    return;
  }
  if (view === 'staff') {
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
    currentFacility = code;
    facilityName.textContent = code;
    currentEmployee = null;
    applyRoleAccess();
    setMessage(signInMessage, '');
    showView('staff');
  });
}

if (signUpForm) {
  signUpForm.addEventListener('submit', (event) => {
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
    currentFacility = signUpFacility.value.trim();
    facilityName.textContent = currentFacility;
    currentEmployee = null;
    applyRoleAccess();
    setMessage(signUpMessage, '');
    showView('staff');
  });
}

if (signOutBtn) {
  signOutBtn.addEventListener('click', () => {
    currentFacility = null;
    currentEmployee = null;
    facilityName.textContent = t('header.facilityDashboard');
    signInForm.reset();
    signUpForm.reset();
    if (adminSignInForm) adminSignInForm.reset();
    if (employeeSignInForm) employeeSignInForm.reset();
    if (staffAdminPanel) staffAdminPanel.classList.add('hidden');
    showView('welcome');
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
  const receipts = loadReceipts();
  return employees.map((doc) => {
    const docKey = doc.code || doc.email || doc.name;
    const totalForDoc = receipts
      .filter((rec) => rec.doctor === docKey || rec.doctorName === doc.name)
      .reduce((sum, rec) => sum + (rec.total || 0), 0);
    const rate = doc.payRate || 0;
    const amount = doc.payType === 'locum' ? totalForDoc * (rate / 100) : 0;
    return { name: doc.name || docKey, amount };
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
    if (docUpcoming) docUpcoming.textContent = '0';
    if (docCompleted) docCompleted.textContent = receipts.filter((r) => r.doctor === docKey).length.toString();
    if (docPatientList) {
      docPatientList.innerHTML = '';
      assigned.slice(0, 6).forEach((p) => {
        const li = document.createElement('li');
        li.textContent = p.name || '-';
        docPatientList.appendChild(li);
      });
    }
    if (docRemuneration) {
      const totalForDoc = receipts
        .filter((rec) => rec.doctor === docKey)
        .reduce((sum, rec) => sum + (rec.total || 0), 0);
      const amount = currentEmployee.payType === 'locum'
        ? totalForDoc * ((currentEmployee.payRate || 0) / 100)
        : 0;
      docRemuneration.textContent = formatCfl(amount);
    }
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
    if (pharmacyAlerts) pharmacyAlerts.textContent = '0';
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
    option.textContent = doc.name || doc.email || doc.code;
    assignDoctor.appendChild(option);
  });
}

function updateBillingTotals() {
  if (!billingTableBody) return;
  let total = 0;
  let insuranceTotal = 0;
  let patientTotal = 0;
  const coverage = parseNumber(coverageRate?.value);
  billingTableBody.querySelectorAll('tr').forEach((row) => {
    const qtyInput = row.querySelector('.billing-qty');
    const priceInput = row.querySelector('.billing-price');
    const totalCell = row.querySelector('.billing-total');
    const insuranceCell = row.querySelector('.billing-insurance');
    const patientCell = row.querySelector('.billing-patient');
    const rateCell = row.querySelector('.billing-rate');
    const qty = parseNumber(qtyInput?.value);
    const price = parseNumber(priceInput?.value);
    const lineTotal = qty * price;
    if (totalCell) {
      totalCell.textContent = formatCfl(lineTotal);
    }
    const insurance = lineTotal * (coverage / 100);
    const patient = lineTotal - insurance;
    if (insuranceCell) insuranceCell.textContent = formatCfl(insurance);
    if (patientCell) patientCell.textContent = formatCfl(patient);
    if (rateCell) rateCell.textContent = coverage ? `${coverage}%` : '--';
    total += lineTotal;
    insuranceTotal += insurance;
    patientTotal += patient;
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
    <td class="billing-rate">--</td>
    <td class="billing-total">0 CFL</td>
    <td class="billing-insurance">0 CFL</td>
    <td class="billing-patient">0 CFL</td>
    <td><button type="button" class="remove-row" data-i18n="billing.remove">Remove</button></td>
  `;
  row.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('input', updateBillingTotals);
  });
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
        showView('staff');
      } else if (target === 'dashboard') {
        showView('dashboard');
      }
    });
  });
}

if (backToModules) {
  backToModules.addEventListener('click', () => showView('modules'));
}

if (backToWelcome) {
  backToWelcome.addEventListener('click', () => showView('welcome'));
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
    setMessage(adminSignInMessage, '');
    if (staffAdminPanel) {
      staffAdminPanel.classList.remove('hidden');
      renderStaffList();
    }
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
    if (!name || !role || !code || !tempPassword) {
      setMessage(staffMessage, t('staff.messages.staffRequired'));
      return;
    }
    const roleLabel = staffRole.options[staffRole.selectedIndex]?.textContent || role;
    const payType = role === 'doctor' ? doctorType?.value || 'full' : null;
    const payRate =
      role === 'doctor' && payType === 'locum' ? parseNumber(doctorRate?.value) : 0;
    const employees = loadEmployees();
    employees.push({
      name,
      role,
      roleLabel,
      email,
      phone,
      code,
      password: tempPassword,
      payType,
      payRate,
    });
    saveEmployees(employees);
    staffForm.reset();
    setMessage(staffMessage, t('staff.messages.created'));
    renderStaffList();
    populateDoctorSelect();
    toggleDoctorFields();
  });
}

function toggleDoctorFields() {
  if (!doctorFields || !staffRole) return;
  const isDoctor = staffRole.value === 'doctor';
  doctorFields.style.display = isDoctor ? 'grid' : 'none';
  if (!isDoctor) {
    if (doctorRate) doctorRate.value = '';
    if (doctorType) doctorType.value = 'full';
  }
}

if (staffRole) {
  staffRole.addEventListener('change', toggleDoctorFields);
  toggleDoctorFields();
}

if (doctorType) {
  doctorType.addEventListener('change', () => {
    if (doctorRate) {
      doctorRate.disabled = doctorType.value !== 'locum';
      if (doctorType.value !== 'locum') {
        doctorRate.value = '';
      }
    }
  });
  if (doctorRate) {
    doctorRate.disabled = doctorType.value !== 'locum';
  }
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
    if (!name || !sex) {
      setMessage(patientMessage, t('billing.patientRequired'));
      return;
    }
    const record = {
      name,
      sex,
      dob: patientDob?.value || '',
      age: patientAge?.value || '',
      address: patientAddress?.value || '',
      phone: patientPhone?.value || '',
      emergency: patientEmergencyPhone?.value || '',
      whatsapp: patientWhatsapp?.value || '',
      profession: patientProfession?.value || '',
      education: patientEducation?.value || '',
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
  receiptFacility.textContent = currentFacility || 'MediTrack';
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
    const lineTotal = qty * price;
    if (!item && !lineTotal) return;
    const insurance = lineTotal * (coverage / 100);
    const patient = lineTotal - insurance;
    totalInsurance += insurance;
    totalPatient += patient;
    items.push({
      label: item,
      category,
      qty,
      price,
      total: lineTotal,
      insurance,
      patient,
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
