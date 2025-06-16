import React, { useState } from 'react';
import { Copy, ChevronRight, ChevronLeft, Check } from 'lucide-react';

type ScriptData = {
  numeroDeIncidente: string;
  tipoDeUsuario: string;
  afectacionUsuario: string;
  tipoDeSoporte: string;
  tipoDeSolucion: string;
  componente: string;
  configurationItem: string;
  solucionEnTiempo: string;
  motivoRetraso: string;
  comentarios: string;
};

interface SurveyScriptGeneratorProps {
  onBack: () => void;
}

const SurveyScriptGenerator = ({ onBack }: SurveyScriptGeneratorProps) => {
  const [step, setStep] = useState(1);
  const [script, setScript] = useState<ScriptData>({
    numeroDeIncidente: '',
    tipoDeUsuario: '',
    afectacionUsuario: '',
    tipoDeSoporte: '',
    tipoDeSolucion: '',
    componente: '',
    configurationItem: 'N/A',
    solucionEnTiempo: '',
    motivoRetraso: '',
    comentarios: ''
  });

  const [copied, setCopied] = useState(false);
  const [showFinalScript, setShowFinalScript] = useState(false);

  const tipoDeUsuarioOpciones = [
    "EDIFICIO/OFICINAS",
    "EJECUTIVO MOVIL",
    "SUCURSAL BACKOFFICE",
    "SUCURSAL CAJAS",
    "SUCURSAL EJECUTIVO",
    "SUCURSAL MOVIL",
    "SUCURSAL WORKBENCH",
    "SUCURSAL QMS"
  ];

  const afectacionUsuarioOpciones = [
    "TOTAL",
    "PARCIAL",
    "SIN AFECTACION"
  ];

  const tipoDeSolucionOpciones = {
    "HW": [
      "HW - INSTALACION NUEVA",
      "HW - RETIRO",
      "HW - REEMPLAZO",
      "HW - MANTENIMIENTO",
      "HW - REUBICACIÓN",
      "HW - REINSTALACION DE DRIVER"
    ],
    "SW": [
      "SW - DESINSTALACION",
      "SW - REINSTALAR",
      "SW - CONFIGURACIÓN"
    ],
    "RED": [
      "RED - ASIGNACION IP",
      "RED - BAJA DNS",
      "RED - ALTA DNS",
      "RED - MANTENIMIENTO",
      "RED - REEMPLAZO",
      "RED - REINICIO"
    ],
    "USUARIO": [
      "Usuario - ASESORIA",
      "Usuario - VALIDACION DE PRIVILEGIOS",
      "Usuario - PASSWORD",
      "Usuario - SIN FALLA"
    ]
  };

  const componentesHWOpciones = [
    "PC-FUENTE PODER",
    "PC-CPU",
    "LAPTOP-DISPLAY",
    "LAPTOP-TOUCHPAD",
    "LAPTOP-TECLADO",
    "LAPTOP-CARGADOR",
    "LAPTOP-CPU",
    "ACC-TECLADO",
    "ACC-MOUSE",
    "ACC-MONITOR",
    "SUCURSAL-TELEFONIA-RADIO",
    "SUCURSAL-TELEFONIA-TELEFONO",
    "SUCURSAL-TELEFONIA-DIADEMA",
    "ACC-LECTORA DE CHEQUES",
    "ACC-LECTOR DE HUELLAS",
    "ACC-IMPRESORA VENTANILLA",
    "ACC-LECTOR CODIGO DE BARRAS",
    "ACC-PINPAD",
    "ACC-HUB USB",
    "ACC-DOCKING STATION",
    "ACC-SCANNER EPSON",
    "ACC-AUTENTICADOR DE DOCUMENTOS",
    "ACC-PAD DE FIRMAS",
    "ACC-WEBCAM",
    "QMS-IMPRESORA",
    "QMS-MONITOR TOUCH",
    "QMS-PANTALLA",
    "QMS-VIDEOMIXER",
    "IMPRESORA LASER",
    "DEP-TELEFONIA",
    "DEP-AUDIO Y VIDEO-VIDEO CONFERENCIAS",
    "APPLE-IPAD KARDEX",
    "OTRO - DESCRIBE EN COMENTARIOS"
  ];

  const componentesSWOpciones = [
    "ACCOUNT OPENING/PAQUETE DIGITAL",
    "TEOS",
    "PLATINO / URANIO",
    "ADM WIN / WIN6530 / COMDRIVE",
    "FIREFLY",
    "ECLIPSE / ONE ECLIPSE / CRONOS",
    "ONDEMAND",
    "JAVA",
    "GOOGLE CHROME",
    "MICROSOFT EDGE",
    "MICROSOFT OFFICE 365 (EXCEL, WORD, POWERPOINT, ACCESS)",
    "MICROSOFT OFFICE DIFERENTE A 365",
    "CISCO ANYCONNECT / VPN",
    "MICROSOFT TEAMS DESKTOP APP",
    "CISCO JABBER",
    "COGNOS",
    "AVAYA",
    "VISOR DE CÁMARAS",
    "SQL",
    "TERADATA",
    "SCCM",
    "DNS",
    "DICTANET",
    "VALIJA DIGITAL",
    "TAP TO PRINT, SERVIDOR DE IMPRESIÓN",
    "ONE DRIVE",
    "NETMATRIX",
    "QMS APLICATIVO",
    "SOFTWARE PC MAC",
    "MICROSOFT OUTLOOK 2016",
    "PORTAL ÚNICO",
    "ANACONDA",
    "INTELAR",
    "WORK DAY",
    "SMARTVIEWER",
    "KYC",
    "ARIES / CRÉDITO INMEDIATO",
    "PORTAL ACID",
    "VARIAS APPS - DE NEGOCIO VER NOTA",
    "EAFORE",
    "SOLICITUDES DE SEGURIDAD",
    "BIOMÉTRICOS/HUELLAS PARA EMPLEADOS",
    "EERS SPEI AND SPID PAGOS INTERBANCARIOS",
    "DRIVER LEXMARK IMPRESIÓN",
    "DRIVER-XEROX SCANNER",
    "BLACKBERRY UEM",
    "MOBILE TOKEN REACTIVATION",
    "MICROSOFT AUTHENTICATOR",
    "0365 / MS TEAMS MOBILE APPS",
    "CITI AUTHENTICATOR MOBILE APPLICATION",
    "ZOOM",
    "WEBEX",
    "ACROBAT READER (PDF)",
    "DRIVER-ACCESORIOS",
    "OTRO - DESCRIBE EN COMENTARIOS"
  ];

  const componentesRedOpciones = [
    "ROUTER",
    "LANSWITCH",
    "ACCESS POINT (WAP)",
    "MODEM WIFI",
    "CONECTOR (PATCH CORD)",
    "ENERGÍA ELÉCTRICA",
    "MEDIO TELECOMM",
    "OTRO - DESCRIBE EN COMENTARIOS"
  ];

  const componentesUsuarioOpciones = [
    "CMP REQUERIMIENTO",
    "PROBLEMAS CON PASSWORDS",
    "INFRAESTRUCTURA DEL EDIFICIO (INMUEBLES)",
    "SIN FALLA",
    "OTRO - DESCRIBE EN COMENTARIOS"
  ];

  const motivoRetrasoOpciones = [
    "USUARIO AGENDA ATENCIÓN",
    "USUARIO NO PERMITE ACCESO AL IDS",
    "USUARIO NO SE ENCUENTRA EN EL INMUEBLE",
    "USUARIO NO LOCALIZABLE",
    "DEPENDENCIA DE AGENTES EXTERNOS",
    "DEPENDENCIA DE PROVEEDORES",
    "DEPENDENCIA DE EQUIPO DE RESPALDO",
    "ESCALAMIENTO L2-L3",
    "LIBERACIÓN DE USUARIO SA",
    "DEPENDENCIA DE LOGÍSTICA",
    "PROBLEMAS BUILD FACTORY"
  ];

  const getTipoDeSoporte = (componente: string): string => {
    if (componentesHWOpciones.includes(componente)) return "HW";
    if (componentesSWOpciones.includes(componente)) return "SW";
    if (componentesRedOpciones.includes(componente)) return "RED";
    if (componentesUsuarioOpciones.includes(componente)) return "USUARIO";
    return "";
  };

  const getConfigurationItem = (componente: string): string => {
    switch (componente) {
      // Condiciones de HW
      case "PC-FUENTE PODER":
      case "SUC-PC-CPU":
      case "ACC-TECLADO":
      case "ACC-MOUSE":
      case "ACC-MONITOR":
      case "ACC-HUB USB":
      case "ACC-DOCKING STATION":
        return "BRANCH SERVICES MX-PC HARDWARE-PROD-TSO";
      case "DEP-PC-CPU":
        return "PHYSICAL DESKTOP SERVICES-LATAM-PROD-TSO";
      case "LAPTOP-DISPLAY":
      case "LAPTOP-TOUCHPAD":
      case "LAPTOP-TECLADO":
      case "LAPTOP-CARGADOR":
      case "LAPTOP-CPU":
        return "PHYSICAL DESKTOP SERVICES-LATAM-PROD-TSO";
      case "IMPRESORA LASER":
        return "PRINT MANAGEMENT-LATAM-PROD-1";
      case "ACC-IMPRESORA VENTANILLA":
        return "BRANCH SERVICES MX-IMPRESORA VENTANILLA-PROD-TSO";
      case "ACC-WEBCAM":
        return "BRANCH SERVICES MX-CAMARA WEB-PROD-TSO";
      case "TEL-RADIO":
      case "TEL-TELEFONO":
      case "TEL-DIADEMA":
      case "SUCURSAL-TELEFONIA-RADIO":
      case "SUCURSAL-TELEFONIA-TELEFONO":
      case "SUCURSAL-TELEFONIA-DIADEMA":
        return "BRANCH SERVICES MX-TELEFONO-PROD-TSO";
      case "DEP-TEL-TELEFONIA":
      case "DEP-TELEFONIA":
        return "VOICE ENTERPRISE TELEPHONY SERVICES-LATAM-MX-PROD-TSO";
      case "DEP-AUDIO Y VIDEO-VIDEO CONFERENCIAS":
        return "ZOOM CLOUD VIDEO MEETINGS-NAM-PROD-1";
      case "ACC-AUTENTICADOR DE DOCUMENTOS":
        return "BRANCH SERVICES MX-AUTENTICADOR DOCUMENTOS-PROD-TSO";
      case "APPLE-IPAD KARDEX":
        return "BRANCH SERVICES MX-PC TABLETA-PROD-TSO";
      case "ACC-SCANNER EPSON":
        return "BRANCH SERVICES MX-SCANNER-PROD-TSO";
      case "ACC-LECTOR CODIGO DE BARRAS":
        return "BRANCH SERVICES MX-LECTOR CODIGO DE BARRAS-PROD-TSO";
      case "ACC-LECTORA DE CHEQUES":
        return "BRANCH SERVICES MX-LECTOR CHEQUES-PROD-TSO";
      case "ACC-LECTOR DE HUELLAS":
        return "BRANCH SERVICES MX-LECTOR HUELLA-PROD-TSO";
      case "ACC-PAD DE FIRMAS":
        return "BRANCH SERVICES MX-PAD FIRMA DIGITAL-PROD-TSO";
      case "ACC-PINPAD":
        return "BRANCH SERVICES MX-PIN PAD-PROD-TSO";
      case "QMS-IMPRESORA":
      case "QMS-MONITOR TOUCH":
      case "QMS-PANTALLA":
        return "BRANCH SERVICES MX-QMS_INFRAESTRUCTURA-PROD-TSO";
      case "QMS-VIDEOMIXER":
        return "BRANCH SERVICES MX-AUDIO Y VIDEO-PROD-TSO";
      case "APPLE - DESKTOP/LAPTOP":
        return "PHYSICAL DESKTOP SERVICES-APPLE MAC-PROD-TSO";

      // Condiciones de SW
      case "SOFTWARE WINDOWS":
        return "PHYSICAL DESKTOP SERVICES-LATAM-PROD-TSO";
      case "ACCOUNT OPENING/PAQUETE DIGITAL":
        return "DIGITAL ACQUISITION MX TRANSACTION MANAGER-LATAM-MX-PROD-1";
      case "TEOS":
        return "WEB TECHNOLOGY IN BRANCH OFFICES-LATAM-MX-PROD-1";
      case "PLATINO / URANIO":
        return "INTEGRAL SUPPORT MARKET PLATFORM-LATAM-MX-PROD-1";
      case "ADM WIN / WIN6530 / COMDRIVE":
        return "ADM TERMINAL EMULATOR-LATAM-MX-PROD-1";
      case "FIREFLY":
        return "GC FIREFLY MEXICO-LATAM-MX-PROD-1";
      case "ECLIPSE / ONE ECLIPSE / CRONOS":
        return "ECLIPSE - MEXICO-LATAM-MX-PROD-1";
      case "ONDEMAND":
        return "IMAGE CORPORATE SOLUTION-LATAM-MX-PROD-1";
      case "JAVA":
        return "JAVA FINANCIAL PLATFORM LATAM-LATAM-CO-PROD-1";
      case "GOOGLE CHROME":
        return "DESKTOP APPLICATION SERVICES-CHROME-PROD-TSO";
      case "MICROSOFT EDGE":
        return "DESKTOP APPLICATION SERVICES-MICROSOFT EDGE-PROD-TSO";
      case "MICROSOFT OFFICE 365 (EXCEL, WORD, POWERPOINT, ACCESS)":
        return "OFFICE PRO PLUS-NAM-PROD-1";
      case "MICROSOFT OFFICE DIFERENTE A 365":
        return "DESKTOP APPLICATION SERVICES-MICROSOFT OFFICE 2016 PRODUCTS-PROD-TSO";
      case "CISCO ANYCONNECT / VPN":
        return "REMOTE ACCESS - CITI VPN WITH CISCO ANYCONNECT-LATAM-PROD-1";
      case "MICROSOFT TEAMS DESKTOP APP":
        return "MICROSOFT TEAMS-NAM-PROD-1";
      case "CISCO JABBER":
        return "VOICE ENTERPRISE TELEPHONY SERVICES-VOICE - CISCO JABBER FOR WINDOWS-PROD-TSO";
      case "COGNOS":
        return "EDW PRODUCTION MEX - COGNOS-LATAM-MX-PROD-1";
      case "AVAYA":
        return "AVAYA AGENT FOR DESKTOP-NAM-PROD-1A";
      case "VISOR DE CÁMARAS":
        return "CSIS - SECURITY - MEXICO - BRANCH WATCHLIST ALERTING SYSTEM-LATAM-PROD-1";
      case "SQL":
        return "SQL GUARD GLOBAL DEPLOYMENT-LATAM-PROD-1";
      case "TERADATA":
        return "TERADATA PLATFORM-NAM-US-PROD-1";
      case "SCCM":
        return "SCCM ECM END USER SERVICES-NAM-PROD-SCCM";
      case "DNS":
        return "DNS SERVER-NAM-PROD-1";
      case "DICTANET":
        return "DICTANET - LEGAL CLIENT DOCUMENTATION REVIEW MX-LATAM-MX-PROD-1";
      case "VALIJA DIGITAL":
        return "SCANNING APP FROM BRANCHES-NAM-US-UAT-SCANING APP FROM BRA";
      case "TAP TO PRINT, SERVIDOR DE IMPRESIÓN":
        return "PRINT MANAGEMENT-LATAM-PROD-1";
      case "ONE DRIVE":
        return "DESKTOP APPLICATION SERVICES-ONE DRIVE-PROD-TSO";
      case "NETMATRIX":
        return "CSIS - SECURITY - MEXICO - NETMATRIX PHYSICAL SECURITY INFORMATION MANAGEMENT-LATAM-MX-PROD-1";
      case "QMS APLICATIVO":
        return "QUEUE MANAGEMENT SYSTEM - MEXICO-LATAM-MX-PROD-1";
      case "MICROSOFT OUTLOOK 2016":
        return "EMAIL SERVICES-OFFICE OUTLOOK - 2016-PROD-TSO";
      case "SOFTWARE PC MAC":
        return "PHYSICAL DESKTOP SERVICES-APPLE MAC-PROD-TSO";

      // Condiciones de RED
      case "ENERGIA ELÉCTRICA":
      case "ENERGÍA ELÉCTRICA":
      case "MEDIO TELECOMM":
        return "NETWORK SERVICES - PERIMETER-LATAM-PROD-EXTRANET";
      case "ROUTER":
      case "LANSWITCH":
      case "CONECTOR (PATCH CORD)":
        return "NETWORK SERVICES - PERIPHERAL-LATAM-PROD-I";
      case "ACCESS POINT (WAP)":
      case "MODEM WIFI":
        return "CISCO UNIFIED WIRELESS NETWORK-NAM-PROD-1";

      // Condiciones de USUARIO
      case "CMP REQUERIMIENTO":
        return "RESOLVEIT REQUESTS-NAM-PROD-CTO";
      case "PROBLEMAS CON PASSWORDS":
        return "ONERESET-NAM-PROD-CTO";
      case "INFRAESTRUCTURA DEL EDIFICIO (INMUEBLES)":
        return "REALM CRS GSO -Building Request (BRF)-NAM-PROD-TSO";
      case "SIN FALLA":
        return "N/A";

      default:
        if (componentesRedOpciones.includes(componente) || componentesUsuarioOpciones.includes(componente)) {
          return "PENDIENTE";
        }
        return "N/A";
    }
  };

  const handleChange = (field: keyof ScriptData, value: string) => {
    const newData = {
      ...script,
      [field]: value
    };

    if (field === 'numeroDeIncidente') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      newData.numeroDeIncidente = digitsOnly;
    }

    if (field === 'componente') {
      newData.tipoDeSoporte = getTipoDeSoporte(value);
      newData.configurationItem = getConfigurationItem(value);
    }

    if (field === 'tipoDeSoporte') {
      newData.tipoDeSolucion = '';
      newData.componente = '';
      newData.configurationItem = 'N/A';
    }

    if (field === 'solucionEnTiempo' && value === "Sí") {
      newData.motivoRetraso = '';
    }

    setScript(newData);
  };

  const nextStep = () => {
    if (step === 9) {
      setShowFinalScript(true);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (showFinalScript) {
      setShowFinalScript(false);
    } else {
      setStep(prev => Math.max(1, prev - 1));
    }
  };

  const resetForm = () => {
    setScript({
      numeroDeIncidente: '',
      tipoDeUsuario: '',
      afectacionUsuario: '',
      tipoDeSoporte: '',
      tipoDeSolucion: '',
      componente: '',
      configurationItem: 'N/A',
      solucionEnTiempo: '',
      motivoRetraso: '',
      comentarios: ''
    });
    setStep(1);
    setShowFinalScript(false);
    setCopied(false);
  };

  const copyToClipboard = () => {
    const scriptText = generateScriptText();
    navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateScriptText = () => {
    return `Número de Incidente: INC${script.numeroDeIncidente}
Tipo de Usuario: ${script.tipoDeUsuario}
Afectación del Usuario: ${script.afectacionUsuario}
Componente Reportado: ${script.componente}
Tipo de Soporte: ${script.tipoDeSoporte}
Acción Realizada: ${script.tipoDeSolucion}
Configuration Item: ${script.configurationItem}
Solución en Tiempo: ${script.solucionEnTiempo}${script.solucionEnTiempo === "No" ? `\nMotivo Retraso: ${script.motivoRetraso}` : ''}
Comentarios: ${script.comentarios}`;
  };

  const renderFinalScript = () => {
    return (
      <div className="space-y-8 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Script Generado</h2>
          <p className="text-blue-100">Revisa y copia el script generado</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-left max-w-2xl mx-auto">
          <pre className="whitespace-pre-wrap font-mono text-gray-800 text-sm overflow-x-auto">
            {generateScriptText()}
          </pre>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={copyToClipboard}
            className={`px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2 ${
              copied
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
            }`}
          >
            {copied ? (
              <>
                <span>¡Copiado!</span>
                <Check className="w-5 h-5" />
              </>
            ) : (
              <>
                <span>Copiar al Portapapeles</span>
                <Copy className="w-5 h-5" />
              </>
            )}
          </button>

          <button
            onClick={resetForm}
            className="px-8 py-4 rounded-xl text-lg font-bold bg-gray-600 hover:bg-gray-700 text-white shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Generar Nuevo Cierre</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885 0A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={onBack}
            className="px-8 py-4 rounded-xl text-lg font-bold bg-gray-500 hover:bg-gray-600 text-white shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Volver al Inicio</span>
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Número de Incidente</h2>
              <p className="text-blue-100">Ingresa los 10 dígitos del número de incidente (se agregará automáticamente el prefijo "INC")</p>
            </div>
            
            <div className="max-w-md mx-auto space-y-2">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-mono">INC</div>
                <input
                  className={`w-full pl-12 pr-4 py-3 bg-white border ${
                    script.numeroDeIncidente && script.numeroDeIncidente.length !== 10
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-mono`}
                  type="text"
                  value={script.numeroDeIncidente}
                  onChange={(e) => handleChange("numeroDeIncidente", e.target.value)}
                  placeholder="1234567890"
                  required
                  autoFocus
                />
              </div>
              {script.numeroDeIncidente && script.numeroDeIncidente.length !== 10 && (
                <p className="text-red-500 text-sm">Debes ingresar exactamente 10 dígitos</p>
              )}
              <div className="text-sm text-gray-500 mt-2">
                Número completo: <span className="font-mono">INC{script.numeroDeIncidente || '__________'}</span>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Tipo de Usuario</h2>
              <p className="text-blue-100">Selecciona el tipo de usuario que reportó el incidente</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {tipoDeUsuarioOpciones.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  onClick={() => handleChange("tipoDeUsuario", opcion)}
                  className={`px-6 py-4 rounded-xl text-lg font-medium transition-all ${
                    script.tipoDeUsuario === opcion
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {opcion}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Afectación del Usuario</h2>
              <p className="text-blue-100">¿Qué tan afectado se vio el usuario por este incidente?</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
              {afectacionUsuarioOpciones.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  onClick={() => handleChange("afectacionUsuario", opcion)}
                  className={`px-6 py-4 rounded-xl text-lg font-medium transition-all ${
                    script.afectacionUsuario === opcion
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {opcion}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Componente Reportado</h2>
              <p className="text-blue-100">¿Qué fue lo que reportó el usuario o qué solicitud estás atendiendo?</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-800 border-b pb-2">Hardware (HW)</h3>
                    <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                      {componentesHWOpciones.map((opcion) => (
                        <button
                          key={opcion}
                          type="button"
                          onClick={() => handleChange("componente", opcion)}
                          className={`px-4 py-3 rounded-lg text-left transition-all ${
                            script.componente === opcion
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-800 border-b pb-2">Software (SW)</h3>
                    <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                      {componentesSWOpciones.map((opcion) => (
                        <button
                          key={opcion}
                          type="button"
                          onClick={() => handleChange("componente", opcion)}
                          className={`px-4 py-3 rounded-lg text-left transition-all ${
                            script.componente === opcion
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-800 border-b pb-2">Red</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {componentesRedOpciones.map((opcion) => (
                        <button
                          key={opcion}
                          type="button"
                          onClick={() => handleChange("componente", opcion)}
                          className={`px-4 py-3 rounded-lg text-left transition-all ${
                            script.componente === opcion
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-800 border-b pb-2">Usuario</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {componentesUsuarioOpciones.map((opcion) => (
                        <button
                          key={opcion}
                          type="button"
                          onClick={() => handleChange("componente", opcion)}
                          className={`px-4 py-3 rounded-lg text-left transition-all ${
                            script.componente === opcion
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Acción Realizada</h2>
              <p className="text-blue-100">¿Qué acción tomaste para resolver el incidente?</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
              {script.tipoDeSoporte && tipoDeSolucionOpciones[script.tipoDeSoporte as keyof typeof tipoDeSolucionOpciones]?.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  onClick={() => handleChange("tipoDeSolucion", opcion)}
                  className={`px-6 py-4 rounded-xl text-lg font-medium transition-all text-left ${
                    script.tipoDeSolucion === opcion
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {opcion}
                </button>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Configuration Item</h2>
              <p className="text-blue-100">Este campo se autocompleta según el componente seleccionado</p>
            </div>
            
            <div className="max-w-md mx-auto">
              <input
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 font-mono text-sm text-center"
                type="text"
                value={script.configurationItem}
                readOnly
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Solución en Tiempo</h2>
              <p className="text-blue-100">¿Se resolvió el incidente dentro del tiempo esperado?</p>
            </div>
            
            <div className="flex justify-center gap-6">
              <button
                type="button"
                onClick={() => handleChange("solucionEnTiempo", "Sí")}
                className={`px-8 py-4 rounded-xl text-lg font-bold transition-all ${
                  script.solucionEnTiempo === "Sí"
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Sí
              </button>
              <button
                type="button"
                onClick={() => handleChange("solucionEnTiempo", "No")}
                className={`px-8 py-4 rounded-xl text-lg font-bold transition-all ${
                  script.solucionEnTiempo === "No"
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                No
              </button>
            </div>
          </div>
        );
      case 8:
        return script.solucionEnTiempo === "No" ? (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Motivo del Retraso</h2>
              <p className="text-blue-100">¿Cuál fue el motivo por el que no se resolvió a tiempo?</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
              {motivoRetrasoOpciones.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  onClick={() => handleChange("motivoRetraso", opcion)}
                  className={`px-6 py-4 rounded-xl text-lg font-medium transition-all text-left ${
                    script.motivoRetraso === opcion
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {opcion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Comentarios Finales</h2>
              <p className="text-blue-100">¿Algún detalle adicional que quieras agregar?</p>
            </div>
            
            <div className="max-w-md mx-auto">
              <textarea
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                rows={5}
                value={script.comentarios}
                onChange={(e) => handleChange("comentarios", e.target.value)}
                placeholder="Describe cualquier información adicional relevante..."
                autoFocus
              />
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Comentarios Finales</h2>
              <p className="text-blue-100">¿Algún detalle adicional que quieras agregar?</p>
            </div>
            
            <div className="max-w-md mx-auto">
              <textarea
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                rows={5}
                value={script.comentarios}
                onChange={(e) => handleChange("comentarios", e.target.value)}
                placeholder="Describe cualquier información adicional relevante..."
              />
            </div>
          </div>
        );
      default:
        return <div>Paso no encontrado</div>;
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return script.numeroDeIncidente.length === 10;
      case 2:
        return script.tipoDeUsuario !== '';
      case 3:
        return script.afectacionUsuario !== '';
      case 4:
        return script.componente !== '';
      case 5:
        return script.tipoDeSolucion !== '';
      case 6:
        return true; // Configuration Item is auto-filled
      case 7:
        return script.solucionEnTiempo !== '';
      case 8:
        return script.solucionEnTiempo === 'Sí' || script.motivoRetraso !== '';
      case 9:
        return true; // Comentarios is optional
      default:
        return false;
    }
  };

  if (showFinalScript) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with Logo */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img 
                src="https://microformas.mx/wp-content/uploads/2022/03/microformas-logo.png" 
                alt="Microformas Logo"
                className="h-8 object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Generador de Scripts de Cierre</h1>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={prevStep}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Regresar
              </button>
              <div className="text-sm text-gray-500">Script Final</div>
            </div>
            {renderFinalScript()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="https://microformas.mx/wp-content/uploads/2022/03/microformas-logo.png" 
              alt="Microformas Logo"
              className="h-8 object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Generador de Scripts de Cierre</h1>
          <p className="text-gray-600 mt-2">Completa la información paso a paso para generar tu script de cierre</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Paso {step} de 9</span>
              <span className="text-sm text-gray-500">{Math.round((step / 9) * 100)}% completo</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 9) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8">
            {renderStepContent()}
          </div>
          
          {/* Navigation */}
          <div className="bg-gray-50 px-8 py-6">
            <div className="flex justify-between items-center">
              <button
                onClick={prevStep}
                className={`flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors ${
                  step === 1 ? 'invisible' : ''
                }`}
                disabled={step === 1}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Anterior</span>
              </button>

              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                  canProceed()
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span>{step === 9 ? 'Generar Script' : 'Siguiente'}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyScriptGenerator;