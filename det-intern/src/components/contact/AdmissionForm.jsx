import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';

/**
 * AdmissionForm Component
 * Interactive frontend admission enquiry form with field validations and success feedback.
 */
const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    classApplying: 'Nursery',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      classApplying: 'Nursery',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-premium text-center space-y-6 flex flex-col items-center justify-center min-h-[460px]"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2 max-w-md">
          <h3 className="text-2xl font-heading font-extrabold text-primary">
            Enquiry Received!
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Thank you, <span className="font-semibold text-primary">{formData.parentName}</span>! Your admission enquiry for <span className="font-semibold text-primary">{formData.studentName}</span> has been submitted successfully.
          </p>
          <p className="text-xs text-neutral-500 pt-1">
            Our admissions team will review your message and contact you at <span className="font-semibold text-secondary">{formData.phone}</span> shortly.
          </p>
        </div>

        <Button variant="outline" size="md" onClick={handleReset} className="mt-4">
          Submit Another Enquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/80 shadow-premium">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-extrabold text-primary tracking-tight">
          Admission Enquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1">
          Fill out the details below to request information or schedule a campus visit.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Student & Parent Name Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="studentName" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Student Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g. Aarav Sharma"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                errors.studentName
                  ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                  : 'border-slate-200 focus:border-secondary focus:ring-secondary/20'
              }`}
            />
            {errors.studentName && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.studentName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="parentName" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Parent / Guardian Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. Rajesh Sharma"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                errors.parentName
                  ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                  : 'border-slate-200 focus:border-secondary focus:ring-secondary/20'
              }`}
            />
            {errors.parentName && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.parentName}
              </p>
            )}
          </div>
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                errors.email
                  ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                  : 'border-slate-200 focus:border-secondary focus:ring-secondary/20'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                errors.phone
                  ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                  : 'border-slate-200 focus:border-secondary focus:ring-secondary/20'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Class Applying For Select Dropdown */}
        <div>
          <label htmlFor="classApplying" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            Class Applying For
          </label>
          <select
            id="classApplying"
            name="classApplying"
            value={formData.classApplying}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white"
          >
            <option value="Nursery">Nursery / Playgroup</option>
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="Class I">Class I</option>
            <option value="Class II">Class II</option>
            <option value="Class III">Class III</option>
            <option value="Class IV">Class IV</option>
            <option value="Class V">Class V</option>
            <option value="Class VI">Class VI</option>
            <option value="Class VII">Class VII</option>
            <option value="Class VIII">Class VIII</option>
            <option value="Class IX">Class IX</option>
            <option value="Class X">Class X</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            Additional Message / Questions
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about any specific requirements or questions..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="w-full font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Submit Admission Enquiry</span>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
