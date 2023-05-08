/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class AdminInviteRequestsDenied {
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
   * List all denied workspace invite requests.
   *
   * @see {@link https://api.slack.com/methods/admin.inviteRequests.denied.list} - API method documentation
   */
  async adminInviteRequestsDeniedList(
    req: operations.AdminInviteRequestsDeniedListRequest,
    security: operations.AdminInviteRequestsDeniedListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.AdminInviteRequestsDeniedListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdminInviteRequestsDeniedListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/admin.inviteRequests.denied.list";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.AdminInviteRequestsDeniedListSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.AdminInviteRequestsDeniedListResponse =
      new operations.AdminInviteRequestsDeniedListResponse({
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
