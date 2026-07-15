import React from 'react';
import { 
  Sun, 
  Briefcase, 
  Compass, 
  Sparkles, 
  RefreshCw, 
  Moon, 
  Heart, 
  Wind, 
  Snowflake, 
  SunMoon, 
  Calendar, 
  Shield, 
  Star, 
  Shirt, 
  Leaf, 
  Activity 
} from 'lucide-react';

interface OccasionIconProps {
  name: string;
  className?: string;
}

export const OccasionIcon: React.FC<OccasionIconProps> = ({ name, className = "w-4 h-4" }) => {
  const normName = name.toLowerCase().trim();

  if (normName.includes('daywear')) {
    return <Sun className={className} />;
  } else if (normName.includes('office')) {
    return <Briefcase className={className} />;
  } else if (normName.includes('summer')) {
    return <Sun className={`${className} text-amber-500`} />;
  } else if (normName.includes('travel')) {
    return <Compass className={className} />;
  } else if (normName.includes('casual')) {
    return <Sparkles className={className} />;
  } else if (normName.includes('all seasons')) {
    return <RefreshCw className={className} />;
  } else if (normName.includes('smart casual') || normName.includes('attire')) {
    return <Shirt className={className} />;
  } else if (normName.includes('spring')) {
    return <Leaf className={`${className} text-emerald-500`} />;
  } else if (normName.includes('evening') || normName.includes('night out')) {
    return <Moon className={className} />;
  } else if (normName.includes('dates')) {
    return <Heart className={`${className} text-rose-500`} />;
  } else if (normName.includes('autumn')) {
    return <Wind className={className} />;
  } else if (normName.includes('winter')) {
    return <Snowflake className={`${className} text-sky-400`} />;
  } else if (normName.includes('day & night')) {
    return <SunMoon className={className} />;
  } else if (normName.includes('weekends')) {
    return <Calendar className={className} />;
  } else if (normName.includes('special occasions') || normName.includes('parties')) {
    return <Star className={`${className} text-yellow-500`} />;
  } else if (normName.includes('moments of strength')) {
    return <Shield className={`${className} text-amber-600`} />;
  }

  return <Activity className={className} />;
};
