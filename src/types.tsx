export interface Domain {
  Domain: string;
  Available?: boolean
  
}

export interface DomainProps {
  domains: Domain[];
  setDomains?: (doms: Domain[]) => Domain[]
}

