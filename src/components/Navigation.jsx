import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
      <span><Link to="/activities">Tracker Home</Link></span> &nbsp;&nbsp; 
      <span><Link to="/filter">Search Filter</Link></span> &nbsp;&nbsp; 
      <span><Link to="/stats">Analytics</Link></span>
    </header>
  );
}