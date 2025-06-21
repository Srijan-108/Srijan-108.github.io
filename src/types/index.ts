export interface RegistrationData {
  userName: string;
  carModel: string;
  chargingSpecs: string;
}

export interface FormErrors {
  userName?: string;
  carModel?: string;
  chargingSpecs?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}