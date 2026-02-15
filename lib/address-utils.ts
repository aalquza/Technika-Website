/**
 * Utility functions for displaying addresses with privacy in mind
 */

/**
 * Removes house numbers from street addresses for privacy
 * Examples:
 * "0 Gibbes Street, Charleston, SC 29401" -> "Gibbes Street, Charleston, SC"
 * "104 Murray Boulevard, Charleston, SC 29401" -> "Murray Boulevard, Charleston, SC"
 * "4770 Hwy 165 Suites C and E, Meggett, SC 29449" -> "Hwy 165, Meggett, SC"
 */
export function getPrivateAddress(fullAddress: string): string {
  // Remove house numbers at the start of the address
  // This regex removes:
  // - Numbers at the start
  // - Optional space
  // - Keeps the rest of the address
  let result = fullAddress.replace(/^\d+\s+/, '')
  
  // Remove zip codes for additional privacy
  result = result.replace(/\s+\d{5}(-\d{4})?$/, '')
  
  // Remove "Suites C and E" or similar specific suite info for the office address
  result = result.replace(/\s*Suites?\s+[A-Z](\s+and\s+[A-Z])?\s*,?\s*/i, ', ')
  
  // Clean up any double commas or spaces
  result = result.replace(/,\s*,/g, ',').replace(/\s+/g, ' ').trim()
  
  return result
}
