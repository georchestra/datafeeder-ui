import { Injectable } from '@angular/core'
import { DatasetDistribution } from '@geonetwork-ui/common/domain/model/record'
export enum LinkUsage {
  API = 'api',
  MAP_API = 'mapapi',
  DOWNLOAD = 'download',
  DATA = 'data',
  GEODATA = 'geodata',
  UNKNOWN = 'unknown',
}

@Injectable({
  providedIn: 'root',
})
export class LinkClassifierService {
  getUsagesForLink(link: DatasetDistribution): LinkUsage[] {
    switch (link.type) {
      case 'service': {
        switch (link.accessServiceProtocol) {
          case 'esriRest':
          case 'wfs':
            return [LinkUsage.API, LinkUsage.DOWNLOAD, LinkUsage.GEODATA]
          case 'wms':
          case 'wmts':
            return [LinkUsage.API, LinkUsage.MAP_API]
          case 'ogcFeatures':
            return [LinkUsage.API, LinkUsage.DOWNLOAD, LinkUsage.GEODATA]
          default:
            return [LinkUsage.UNKNOWN]
        }
      }
      case 'link':
        return [LinkUsage.UNKNOWN]
      case 'download': {
        return [LinkUsage.DOWNLOAD]
      }
    }
  }

  hasUsage(link: DatasetDistribution, usage: LinkUsage) {
    return this.getUsagesForLink(link).indexOf(usage) > -1
  }
}
