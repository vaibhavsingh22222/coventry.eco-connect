import React from 'react';

// Import the library components
import { Heading, Text } from './Typography';
import { Button } from './Button';
import { Card } from './Card';
import { Container, Section } from './Layout';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CenteredHero } from './CenteredHero';
import { AsymmetricHero } from './AsymmetricHero';

// --- HELPER: PROP TABLE COMPONENT ---
const PropTable: React.FC<{ 
  props: { name: string; type: string; default: string; desc: string }[] 
}> = ({ props }) => (
  <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-[10px]">
        <tr>
          <th className="px-4 py-3">Prop</th>
          <th className="px-4 py-3">Type</th>
          <th className="px-4 py-3">Default</th>
          <th className="px-4 py-3">Description</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {props.map((p) => (
          <tr key={p.name} className="hover:bg-slate-50/50 transition-colors">
            <td className="px-4 py-3 font-mono font-bold text-indigo-600">{p.name}</td>
            <td className="px-4 py-3 font-mono text-slate-500 text-xs">{p.type}</td>
            <td className="px-4 py-3 font-mono text-slate-400 text-xs">{p.default}</td>
            <td className="px-4 py-3 text-slate-600 italic">{p.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- DOCS SECTION COMPONENT ---
const DocSection: React.FC<{ 
  title: string; 
  description: string; 
  children: React.ReactNode; 
  code: string;
  propsList?: { name: string; type: string; default: string; desc: string }[];
  dark?: boolean;
}> = ({ title, description, children, code, propsList, dark = false }) => (
  <section className="mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="mb-8">
      <Heading level={2} className="mb-3">{title}</Heading>
      <Text className="max-w-3xl text-lg">{description}</Text>
    </div>
    
    <div className={`${dark ? 'bg-slate-900' : 'bg-slate-50'} border border-slate-200 rounded-3xl p-6 md:p-10 mb-6 shadow-inner overflow-hidden`}>
      <h4 className={`text-[10px] font-black uppercase tracking-widest mb-6 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
        Live Preview
      </h4>
      {children}
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-slate-400 italic">
          Component Code
        </h4>
        <pre className="bg-slate-900 text-indigo-200 p-6 rounded-2xl overflow-x-auto text-sm font-mono border border-slate-800 shadow-2xl h-full">
          <code>{code}</code>
        </pre>
      </div>

      <div>
        <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-slate-400 italic">
          Properties (API)
        </h4>
        {propsList ? (
          <PropTable props={propsList} />
        ) : (
          <p className="text-sm text-slate-400 italic">No specific props for this element.</p>
        )}
      </div>
    </div>
  </section>
);

export const DocumentationPortal: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20 selection:bg-green-100">
      
      <Container className="mt-20">
        <header className="mb-24">
          <Heading level={1} className="mb-6 tracking-tighter">
            UI Library Documentation
          </Heading>
          
          <Text className="text-2xl max-w-3xl font-light text-slate-500 leading-relaxed">
            Welcome to the official <strong>CU Coventry Cloud Computing</strong> component library. 
            This kit is designed for students to rapidly prototype professional, cloud-ready dashboards and landing pages.
          </Text>
        </header>

        {/* NAVBAR */}
        <DocSection
          title="Navigation Bar"
          description="A responsive navigation header with glassmorphism effects."
          code={`<Navbar />`}
        >
          <Navbar />
        </DocSection>

        {/* LAYOUT */}
        <DocSection
          title="Layout: Section & Container"
          description="Core layout system for spacing and structure."
          propsList={[
            { name: 'children', type: 'ReactNode', default: 'null', desc: 'Inner content' },
            { name: 'className', type: 'string', default: '""', desc: 'Custom classes' },
            { name: 'bg', type: 'string', default: '"bg-white"', desc: 'Background color' },
          ]}
          code={`<Section bg="bg-slate-50">\n  <Container>\n    <Text>Layout</Text>\n  </Container>\n</Section>`}
        >
          <div className="bg-green-50 border-2 border-dashed border-green-200 p-6 rounded-xl text-center font-bold text-green-700">
            Container Preview
          </div>
        </DocSection>

        {/* TYPOGRAPHY */}
        <DocSection
          title="Typography"
          description="Heading and text system for UI consistency."
          code={`<Heading level={1}>Title</Heading>\n<Text>Body text</Text>`}
        >
          <Heading level={1}>H1 Heading</Heading>
          <Heading level={2}>H2 Heading</Heading>
          <Heading level={3}>H3 Heading</Heading>
          <Text>Body text example</Text>
        </DocSection>

        {/* BUTTONS */}
        <DocSection
          title="Button Variants"
          description="Action buttons with semantic states."
          propsList={[
            { name: 'variant', type: "'info' | 'success' | 'alert' | 'danger' | 'eco'", default: "'eco'", desc: 'Button style' },
          ]}
          code={`<Button variant="success">Click</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="info">Info</Button>
            <Button variant="success">Success</Button>
            <Button variant="alert">Alert</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="eco">Eco</Button>
          </div>
        </DocSection>

        {/* CARDS */}
        <DocSection
          title="Cards"
          description="Reusable content containers."
          code={`<Card title="Example" description="Demo card" />`}
        >
          <div className="max-w-sm">
            <Card
              title="Eco System"
              description="Sustainable cloud learning platform."
            >
              <Button variant="eco" className="w-full">Explore</Button>
            </Card>
          </div>
        </DocSection>

        {/* HEROES */}
        <DocSection
          title="Hero Sections"
          description="Landing page hero components."
          code={`<AsymmetricHero />\n<CenteredHero />`}
        >
          <AsymmetricHero />
          <div className="mt-10">
            <CenteredHero />
          </div>
        </DocSection>

        {/* FOOTER */}
        <DocSection
          title="Footer"
          description="Site footer component."
          dark
          code={`<Footer />`}
        >
          <Footer />
        </DocSection>

      </Container>

      {/* FINAL FOOTER */}
      <Section bg="bg-slate-900" className="mt-20">
        <Container>
          <div className="text-center">
            <div className="text-white font-black text-2xl mb-4">
              CU COVENTRY CLOUD LABS
            </div>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              EcoConnect UI system for modern sustainable applications.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default DocumentationPortal;