// Placeholder Supabase integration
// TODO: Install @supabase/supabase-js and configure with your Supabase credentials

import { RegistrationData, ApiResponse } from '../types';

/**
 * Placeholder Supabase client configuration
 * Replace with actual Supabase URL and anon key
 */
const SUPABASE_URL = 'your-supabase-url';
const SUPABASE_ANON_KEY = 'your-supabase-anon-key';

/**
 * Initialize Supabase client (placeholder)
 * Uncomment and configure when ready to integrate
 */
// import { createClient } from '@supabase/supabase-js'
// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

/**
 * Submit registration data to Supabase
 * @param data Registration form data
 * @returns Promise with API response
 */
export const submitRegistration = async (data: RegistrationData): Promise<ApiResponse> => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // TODO: Replace with actual Supabase insert
    // const { data: result, error } = await supabase
    //   .from('ev_registrations')
    //   .insert([
    //     {
    //       user_name: data.userName,
    //       car_model: data.carModel,
    //       charging_specs: data.chargingSpecs,
    //       created_at: new Date().toISOString()
    //     }
    //   ])
    //   .select()

    // if (error) {
    //   throw new Error(error.message)
    // }

    // Placeholder success response
    console.log('Registration submitted:', data);
    
    return {
      success: true,
      message: 'Registration submitted successfully! We will contact you soon.',
      data: data
    };

  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: 'Failed to submit registration. Please try again.',
    };
  }
};

/**
 * Validate form data before submission
 * @param data Registration form data
 * @returns Object with validation errors
 */
export const validateRegistrationData = (data: RegistrationData) => {
  const errors: { [key: string]: string } = {};

  if (!data.userName.trim()) {
    errors.userName = 'User name is required';
  } else if (data.userName.length < 2) {
    errors.userName = 'User name must be at least 2 characters';
  }

  if (!data.carModel.trim()) {
    errors.carModel = 'Car model is required';
  }

  if (!data.chargingSpecs.trim()) {
    errors.chargingSpecs = 'Charging specifications are required';
  }

  return errors;
};