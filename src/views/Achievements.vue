<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card class="mx-auto" max-width="800">
          <v-img class="white--text align-end" height="200px" src="../assets/images/cisco.jpg">
          </v-img>
          <v-divider></v-divider>
          <v-card-title><FONT FACE="Verdana">Cisco Networking Academy Certificate</FONT></v-card-title>
          <v-card-subtitle class="pb-0"><FONT FACE="Verdana">Number 10</FONT></v-card-subtitle>

          <v-card-actions>
            <v-btn router-link to="/CiscoCert" color="teal" text><FONT FACE="Verdana">More Info</FONT></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card class="mx-auto" max-width="800">
          <v-img class="white--text align-end" height="200px" src="../assets/images/uttntsu.jpg">
          </v-img>
          <v-divider></v-divider>
          <v-card-title><FONT FACE="Verdana">Higher University Technician in IT</FONT></v-card-title>
          <v-card-subtitle class="pb-0"><FONT FACE="Verdana">Number 10</FONT></v-card-subtitle>

          <v-card-actions>
            <v-btn router-link to="/TsuCert" color="teal" text><FONT FACE="Verdana">More Info</FONT></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <!-- <v-flex xs12 sm6>
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title><FONT FACE="Verdana">Top 10 Australian beaches</FONT></v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              text
            >
              Share
            </v-btn>

            <v-btn
              color="orange"
              text
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex> -->

    </v-layout>
  </v-container>
</template>

<script>
  export default {
  }
</script>
