import './index.css';
import ProgramCard from './ProgramCard';

function Programs() {
  return (
    <div className='programs'>
      <div>
        <ProgramCard
          image='customer-icon.webp'
          title='Customer Experience and Hospitality Management Program'
        />
      </div>
      <div>
        <ProgramCard
          image='digitalmarketing-icon.webp'
          title='Digital Marketing Program'
        />
      </div>
      <div>
        <ProgramCard
          image='data-icon.webp'
          title='Junior Data Engineer Program'
        />
      </div>
      <div>
        <ProgramCard
          image='frontend-icon.webp'
          title='Frontend Web Developer Program'
        />
      </div>
      <div>
        <ProgramCard
          image='eldercare-icon.webp'
          title='Eldercare Talent Training Program'
        />
      </div>
      <div>
        <ProgramCard
          image='robot-icon.webp'
          title='Robot Support Assistant Program'
        />
      </div>
      <div>
        <ProgramCard
          image='qa-icon.webp'
          title='Quality Assurance Testing Program'
        />
      </div>
    </div>
  );
}

export default Programs;
