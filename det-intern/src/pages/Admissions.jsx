import React from 'react';
import Container from '../components/common/Container';
import SectionBadge from '../components/common/SectionBadge';
import AdmissionForm from '../components/contact/AdmissionForm';
import WhyChooseSection from '../components/why-choose/WhyChooseSection';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

/**
 * Dedicated Admissions Page (/admissions route)
 */
const Admissions = () => {
  return (
    <div className="flex-grow py-12 sm:py-16 lg:py-20 bg-slate-50">
      <Container className="space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge icon={GraduationCap}>Admissions 2026-27</SectionBadge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight leading-tight">
            Join the Excellence Community
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            We welcome applications for students seeking holistic education, academic rigor, and character development in Aligarh.
          </p>
        </div>

        {/* Admission Guidelines & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Guidelines & Process */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-subtle space-y-6">
            <h3 className="text-2xl font-heading font-bold text-primary">
              Admission Process
            </h3>

            <div className="space-y-4 text-sm text-neutral-600">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-primary text-base">Enquiry & Registration</h4>
                  <p className="text-xs text-neutral-500">Fill out the online enquiry form or visit our campus admissions desk.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-primary text-base">Campus Interaction</h4>
                  <p className="text-xs text-neutral-500">Schedule an informal interaction and tour our state-of-the-art campus facilities.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-primary text-base">Document Submission</h4>
                  <p className="text-xs text-neutral-500">Submit required birth certificate, prior report cards, and identity proofs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-primary text-base">Enrollment Confirmation</h4>
                  <p className="text-xs text-neutral-500">Complete admission fee formalities and welcome your child to Excellence!</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Required Documents</h4>
              <ul className="space-y-1.5 text-xs text-neutral-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Student's Birth Certificate</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Passport size photographs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Transfer Certificate (TC) from previous school</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Parent ID and address proof</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Admission Form */}
          <div className="lg:col-span-7">
            <AdmissionForm />
          </div>

        </div>

        {/* Why Choose Us Highlight */}
        <WhyChooseSection />
      </Container>
    </div>
  );
};

export default Admissions;
