/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Users {
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
   * List conversations the calling user may access.
   *
   * @see {@link https://api.slack.com/methods/users.conversations} - API method documentation
   */
  async usersConversations(
    req: operations.UsersConversationsRequest,
    security: operations.UsersConversationsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersConversationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersConversationsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.conversations";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersConversationsSecurity(security);
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

    const res: operations.UsersConversationsResponse =
      new operations.UsersConversationsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersConversationsSuccessSchema = utils.objectToClass(
            httpRes?.data
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersConversationsErrorSchema = utils.objectToClass(
            httpRes?.data
          );
        }
        break;
    }

    return res;
  }

  /**
   * Delete the user profile photo
   *
   * @see {@link https://api.slack.com/methods/users.deletePhoto} - API method documentation
   */
  async usersDeletePhoto(
    req: operations.UsersDeletePhotoRequestBody,
    security: operations.UsersDeletePhotoSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersDeletePhotoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersDeletePhotoRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.deletePhoto";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "form"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersDeletePhotoSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.UsersDeletePhotoResponse =
      new operations.UsersDeletePhotoResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersDeletePhotoSchema = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersDeletePhotoErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }

  /**
   * Gets user presence information.
   *
   * @see {@link https://api.slack.com/methods/users.getPresence} - API method documentation
   */
  async usersGetPresence(
    req: operations.UsersGetPresenceRequest,
    security: operations.UsersGetPresenceSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetPresenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersGetPresenceRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.getPresence";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersGetPresenceSecurity(security);
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

    const res: operations.UsersGetPresenceResponse =
      new operations.UsersGetPresenceResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.apiMethodUsersGetPresence = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersCountsErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }

  /**
   * Get a user's identity.
   *
   * @see {@link https://api.slack.com/methods/users.identity} - API method documentation
   */
  async usersIdentity(
    req: operations.UsersIdentityRequest,
    security: operations.UsersIdentitySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersIdentityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersIdentityRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.identity";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersIdentitySecurity(security);
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

    const res: operations.UsersIdentityResponse =
      new operations.UsersIdentityResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersIdentitySchema = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersIdentityErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }

  /**
   * Gets information about a user.
   *
   * @see {@link https://api.slack.com/methods/users.info} - API method documentation
   */
  async usersInfo(
    req: operations.UsersInfoRequest,
    security: operations.UsersInfoSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersInfoRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.info";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersInfoSecurity(security);
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

    const res: operations.UsersInfoResponse = new operations.UsersInfoResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersInfoSuccessSchema = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersInfoErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }

  /**
   * Lists all users in a Slack team.
   *
   * @see {@link https://api.slack.com/methods/users.list} - API method documentation
   */
  async usersList(
    req: operations.UsersListRequest,
    security: operations.UsersListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.list";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersListSecurity(security);
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

    const res: operations.UsersListResponse = new operations.UsersListResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersListSchema = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersListErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }

  /**
   * Find a user with an email address.
   *
   * @see {@link https://api.slack.com/methods/users.lookupByEmail} - API method documentation
   */
  async usersLookupByEmail(
    req: operations.UsersLookupByEmailRequest,
    security: operations.UsersLookupByEmailSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersLookupByEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersLookupByEmailRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.lookupByEmail";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersLookupByEmailSecurity(security);
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

    const res: operations.UsersLookupByEmailResponse =
      new operations.UsersLookupByEmailResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersLookupByEmailSuccessSchema = utils.objectToClass(
            httpRes?.data
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersLookupByEmailErrorSchema = utils.objectToClass(
            httpRes?.data
          );
        }
        break;
    }

    return res;
  }

  /**
   * Retrieves a user's profile information.
   *
   * @see {@link https://api.slack.com/methods/users.profile.get} - API method documentation
   */
  async usersProfileGet(
    req: operations.UsersProfileGetRequest,
    security: operations.UsersProfileGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersProfileGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersProfileGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.profile.get";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersProfileGetSecurity(security);
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

    const res: operations.UsersProfileGetResponse =
      new operations.UsersProfileGetResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersProfileGetSchema = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersProfileGetErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }

  /**
   * Set the profile information for a user.
   *
   * @see {@link https://api.slack.com/methods/users.profile.set} - API method documentation
   */
  async usersProfileSet(
    req: operations.UsersProfileSetRequest,
    security: operations.UsersProfileSetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersProfileSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersProfileSetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.profile.set";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersProfileSetSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = {
      ...utils.getHeadersFromRequest(req),
      ...reqBodyHeaders,
      ...config?.headers,
    };

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.UsersProfileSetResponse =
      new operations.UsersProfileSetResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersProfileSetSchema = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersProfileSetErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }

  /**
   * Marked a user as active. Deprecated and non-functional.
   *
   * @see {@link https://api.slack.com/methods/users.setActive} - API method documentation
   */
  async usersSetActive(
    req: operations.UsersSetActiveRequest,
    security: operations.UsersSetActiveSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersSetActiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersSetActiveRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.setActive";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersSetActiveSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.UsersSetActiveResponse =
      new operations.UsersSetActiveResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersSetActiveSchema = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersSetActiveErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }

  /**
   * Set the user profile photo
   *
   * @see {@link https://api.slack.com/methods/users.setPhoto} - API method documentation
   */
  async usersSetPhoto(
    req: operations.UsersSetPhotoRequestBody,
    security: operations.UsersSetPhotoSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersSetPhotoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersSetPhotoRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.setPhoto";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "form"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersSetPhotoSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.UsersSetPhotoResponse =
      new operations.UsersSetPhotoResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersSetPhotoSchema = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersSetPhotoErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }

  /**
   * Manually sets user presence.
   *
   * @see {@link https://api.slack.com/methods/users.setPresence} - API method documentation
   */
  async usersSetPresence(
    req: operations.UsersSetPresenceRequest,
    security: operations.UsersSetPresenceSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersSetPresenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersSetPresenceRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users.setPresence";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UsersSetPresenceSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = {
      ...utils.getHeadersFromRequest(req),
      ...reqBodyHeaders,
      ...config?.headers,
    };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.UsersSetPresenceResponse =
      new operations.UsersSetPresenceResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersSetPresenceSchema = utils.objectToClass(httpRes?.data);
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.usersSetPresenceErrorSchema = utils.objectToClass(httpRes?.data);
        }
        break;
    }

    return res;
  }
}
