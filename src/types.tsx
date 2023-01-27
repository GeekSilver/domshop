export interface Domain {
  Domain: string;
  Available: string // later converted to boolean
  
}

export interface DomainProps {
  domains: Domain[];
  setDomains?: (doms: Domain[]) => Domain[]
}

export interface SingleDomainSearchResultProp extends Omit<Domain, 'Available'> {
  Available: boolean
}

