/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class AdminAppsRestricted {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * List restricted apps for an org or workspace.
   *
   * @see {@link https://api.slack.com/methods/admin.apps.restricted.list} - API method documentation
   */
  async adminAppsRestrictedList(
    req: operations.AdminAppsRestrictedListRequest,
    security: operations.AdminAppsRestrictedListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.AdminAppsRestrictedListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdminAppsRestrictedListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/admin.apps.restricted.list";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.AdminAppsRestrictedListSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.AdminAppsRestrictedListResponse =
      new operations.AdminAppsRestrictedListResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.defaultSuccessTemplate = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.defaultErrorTemplate = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }
}
