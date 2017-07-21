import TroveLogo from '../pages/images/trove-logo.png'
import TroveThumb from '../pages/images/trove-logo-thumb.png'
import NationalArchiveAustralia from '../pages/images/National-Archives-Australia-Logo.jpg'
import NaaLogoThumb from '../pages/images/naa-logo-thumb.png'
import AustralianGovLogo from '../pages/images/aus-gov-logo.jpg'
import AustralianGovThumbLogo from '../pages/images/ag-logo-thumb.jpg'


export default function() {
  return(
    [
      {
        id:1,
        first:'National Library of Australia',
        last:'Trove Collection',
        url:'https://www.nla.gov.au/blogs/trove/2014/08/25/trove-tips-for-family-historians',
        description:'Trove brings together content from libraries, museums, archives, repositories and other research and collecting organisations big and small. Use Trove to research the historical context in which your ancestors lived.',
        logo: TroveLogo,
        thumbnail: TroveThumb,
      },
      {
        id:2,
        first:'National Archive of Australia',
        last:'',
        url:'http://www.naa.gov.au/collection/family-history/',
        description:'The National Archives holds many records in which you might find information about your ancestors. This is the place to come if your family members served in the Australian armed forces or if they migrated to Australia during the 20th century.',
        logo: NationalArchiveAustralia,
        thumbnail: NaaLogoThumb ,
      },
      {
        id:3,
        first:'australia.gov.au',
        last:'',
        url:'http://www.australia.gov.au/information-and-services/culture-and-arts/family-history',
        description:'Find government information and resources to research Australian family histories, including records of people who arrived in the 19th and 20th centuries.',
        logo: AustralianGovLogo,
        thumbnail: AustralianGovThumbLogo,
      }
    ]
  )
}
